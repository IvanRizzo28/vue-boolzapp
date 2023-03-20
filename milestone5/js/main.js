const {createApp}=Vue;

createApp({
    data() {
      return {
        dataOdierna: new Date(),
        cerca: '',
        messaggioTemporaneo: '',
        idActive: -1,
        idCount: 0, //count dell'id conversazioni
        contatti:[ 
            {
                nome: 'Michele',
                cognome: 'Prova',
                img: `../img/avatar_1.jpg`
            },
            {
                nome: 'Giovanni',
                cognome: '',
                img: `../img/avatar_2.jpg`
            },
            {
                nome: 'Giuseppe',
                cognome: '',
                img: `../img/avatar_3.jpg`
            }
        ],
        conversazioni: [
            {
                id: 0,
                idContatto: 0, //indice dell'array contatti
                messaggi:[
                    {
                        testo: 'Ok',
                        data: '17/03/2023 16:15:22',
                        sent: true
                    },
                    {
                        testo: 'Ciao',
                        data: '17/03/2023 16:15:22',
                        sent: false
                    }
                ]
            },
            {
                id: 1,
                idContatto: 1, //indice dell'array contatti
                messaggi:[
                    {
                        testo: 'Ok',
                        data: '10/01/2023 16:15:22',
                        sent: true
                    }
                ]
            },
            {
                id: 2,
                idContatto: 2, //indice dell'array contatti
                messaggi:[
                    {
                        testo: 'Ok',
                        data: '10/01/2020 16:15:22',
                        sent: true
                    },
                    {
                        testo: 'Ciao ciao',
                        data: '15/01/2023 16:15:23',
                        sent: false
                    }
                ]
            }
        ]
      }
    },
    methods:{
        getOrarioUltimoMessaggio(i){
            if (this.conversazioni[i].messaggi.length > 0)
            {
                const data=this.conversazioni[i].messaggi[this.conversazioni[i].messaggi.length-1].data;
                const tmp=data.split(" ");
                const data2=tmp[0].split("/");
                if (Number(data2[2]) === Number(this.dataOdierna.getFullYear())){
                    if (Number(data2[1]) === Number(this.dataOdierna.getMonth()) + 1){
                        if (Number(data2[0]) === Number(this.dataOdierna.getDate())) return tmp[1].substring(0,tmp[1].length-3);
                    }
                    return data2[0]+"/"+data2[1];
                }
                return data2.toString().replaceAll(',', '/');
            }
        },
        getConversazioni(){
            if (this.cerca.trim() !== ''){
                const tmp= this.conversazioni.filter((element) => {
                    if (element.messaggi.length > 0)
                    {
                        let nomeIntero=this.contatti[element.idContatto].nome + " " + this.contatti[element.idContatto].cognome;
                        nomeIntero=nomeIntero.toLowerCase();
                        if (nomeIntero.includes(this.cerca.toLowerCase())) return element;
                    }
                    });
                return tmp;
            }
            const tmp= this.conversazioni.filter(element => {
                if (element.messaggi.length > 0) return element;
            });
            return tmp;
        },
        chatAttiva(){
            if (this.idActive===-1) return false;
            return true;
        },
        isActive(identificativo){
            if (identificativo === this.idActive) return 'active';
            return '';
        },
        setIdActive(identificativo){ 
            this.idActive=identificativo; 
            this.cerca='';
        },
        getConversazioniByIdActive(){
            if (this.idActive > -1){
                for (let i=0;i<this.conversazioni.length;i++)
                {
                    if (this.conversazioni[i].id === this.idActive) return this.conversazioni[i];
                }
            }
        },
        getNomeCognomeContatto(){
            return this.contatti[this.getConversazioniByIdActive().idContatto].nome + " " + this.contatti[this.getConversazioniByIdActive().idContatto].cognome;
        },
        getImgContatto(){
            return this.contatti[this.getConversazioniByIdActive().idContatto].img;
        },
        getMessaggiContatto(){
            if (this.getConversazioniByIdActive().messaggi.length === 0) return '';
            return this.getConversazioniByIdActive().messaggi;
        },
        getOrarioMessaggio(i){
            return this.getConversazioniByIdActive().messaggi[i].data.substring(10,this.getConversazioniByIdActive().messaggi[i].data.length-3);
        },
        eliminaMessaggio(i){
            this.getConversazioniByIdActive().messaggi.splice(i,1);
        },
        inviaMessaggio(){
            if (this.messaggioTemporaneo.trim() != ''){
                this.dataOdierna=new Date();
                const mese=Number(this.dataOdierna.getMonth() + 1);
                const anno=this.dataOdierna.getFullYear();
                const giorno=this.dataOdierna.getDate();
                //Inserisco uno zero prima dei parametri per avere sempre la stessa lugnhezza dellla stringa
                let ora=this.dataOdierna.getHours(); if (ora<10) ora="0"+ora.toString();
                let minuti=this.dataOdierna.getMinutes(); if(minuti<10) minuti="0"+minuti.toString();
                let secondi=this.dataOdierna.getSeconds(); if (secondi<10) secondi="0"+secondi.toString();
                //-------------
                let orario=`${giorno}/${mese}/${anno} ${ora}:${minuti}:${secondi}`;
                this.getConversazioniByIdActive().messaggi.push({
                    testo: this.messaggioTemporaneo,
                    data: orario,
                    sent: true
                });
                this.messaggioTemporaneo='';
                secondi=this.dataOdierna.getSeconds();
                orario=`${giorno}/${mese}/${anno} ${ora}:${minuti}:${secondi}`;
                setTimeout(()=>{
                    this.getConversazioniByIdActive().messaggi.push({
                        testo: 'Ok',
                        data: orario,
                        sent: false
                    });
                },1000);
            }
        }
    }
  }).mount('#app')