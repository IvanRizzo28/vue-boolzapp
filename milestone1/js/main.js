const {createApp}=Vue;
const arr=[];
arr.length
createApp({
    data() {
      return {
        contatti:[ 
            {
                nome: 'Michele',
                cognome: '',
                img: `img/avatar_1.jpg`
            },
            {
                nome: 'Giovanni',
                cognome: ' ',
                img: `img/avatar_2.jpg`
            }
        ],
        conversazioni: [
            {
                idContatto: 0,
                messaggi:[
                    {
                        testo: 'Ok',
                        orario: '12:00',
                        sent: true
                    },
                    {
                        testo: 'Ciao',
                        orario: '18:50',
                        sent: false
                    }
                ]
            },
            {
                idContatto: 1,
                messaggi:[
                    {
                        testo: 'Ok',
                        orario: '12:00',
                        sent: true
                    },
                    {
                        testo: 'Ciao',
                        orario: '14:50',
                        sent: false
                    }
                ]
            }
        ]
      }
    },
    methods:{
        getOrarioUltimoMessaggio(i){
            return this.conversazioni[i].messaggi[this.conversazioni[i].messaggi.length-1].orario;
        }
    }
  }).mount('#app')