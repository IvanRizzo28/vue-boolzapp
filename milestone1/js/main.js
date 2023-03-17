const {createApp}=Vue;

createApp({
    data() {
      return {
        cerca: '',
        idActive: -1,
        idCount: 0,
        contatti:[ 
            {
                nome: 'Michele',
                cognome: '',
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
                idContatto: 0,
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
                idContatto: 1,
                messaggi:[
                    {
                        testo: 'Ok',
                        data: '10/01/2020 16:15:22',
                        sent: true
                    },
                    {
                        testo: 'Ciao',
                        data: '17/01/2023 16:15:22',
                        sent: false
                    }
                ]
            },
            {
                id: 2,
                idContatto: 2,
                messaggi:[
                    {
                        testo: 'Ok',
                        data: '10/01/2020 16:15:22',
                        sent: true
                    },
                    {
                        testo: 'Ciao',
                        data: '10/01/2020 16:15:22',
                        sent: false
                    }
                ]
            }
        ]
      }
    },
    methods:{
        getOrarioUltimoMessaggio(i){
            const data=this.conversazioni[i].messaggi[this.conversazioni[i].messaggi.length-1].data;
            const tmp=data.split(" ");
            const data2=tmp[0].split("/");
            const dataOdierna=new Date();
            if (Number(data2[2]) === Number(dataOdierna.getFullYear())){
                if (Number(data2[1]) === Number(dataOdierna.getMonth()) + 1){
                    if (Number(data2[0]) === Number(dataOdierna.getDate())) return tmp[1].substring(0,tmp[1].length-3);
                }
                return data2[0]+"/"+data2[1];
            }
            return data2.toString().replaceAll(',', '/');
        },
        getConversazioni(){
            if (this.cerca.trim() !== ''){
                return this.conversazioni.filter((element) => {
                    let nomeIntero=this.contatti[element.idContatto].nome + " " + this.contatti[element.idContatto].cognome;
                    nomeIntero=nomeIntero.toLowerCase();
                    if (nomeIntero.includes(this.cerca.toLowerCase())) return element;
                });
            }
            return this.conversazioni;
        },
        chatAttiva(){
            if (this.idActive===-1) return false;
            return true;
        },
        isActive(identificativo){
            if (identificativo === this.idActive) return 'active';
            return '';
            /*let filter=this.conversazioni.filter((element)=>{
                if (element.id === identificativo) return element; 
            });*/
        }
    }
  }).mount('#app')