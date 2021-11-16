var applicazione = new Vue ({
    el: "#app",
    data : {

        contatti: [
            // Michele
            {
                nome:"Michele",
                immagine: "img/avatar_1.jpg",
                visibile: true,
                messages : [
                    {
                        data : "15/11/2021  14:59:34",
                        text : "Hai portato a spasso il cane?",
                        status: "sent"
                    },
                    {
                        data : "15/11/2021  15:12:39",
                        text : "Ricordati di dargli da mangiare",
                        status: "sent"
                    },
                    {
                        data : "15/11/2021  16:02:34",
                        text : "Tutto fatto!",
                        status: "received",
                        posizione :"last"
                    }
                ]
            },

            // Fabio 
            {
                nome:"Fabio",
                immagine: "img/avatar_2.jpg",
                visibile: false,
                messages : [
                    {
                        data : "14/11/2021  18:02:14",
                        text : "Ciao, come stai ?",
                        status: "sent",
                    },
                    {
                        data : "14/11/2021  20:12:39",
                        text : "Bene grazie ! Stasera ci vediamo?",
                        status: "received",
                        posizione :"last"

                    },
                    {
                        data : "14/11/2021  20:22:56",
                        text : "Mi piacerebbe, ma devo andare a fare la spesa.",
                        status: "sent"
                    }
                ]
            },

            // Samuele 
            {
                nome:"Samuele",
                immagine: "img/avatar_3.jpg",
                visibile: false,
                messages : [
                    {
                        data : "13/11/2021  09:02:14",
                        text : "La Marianna va in campagna",
                        status: "received",
                        posizione :""

                    },
                    {
                        data : "13/11/2021  11:15:39",
                        text : "Sicuro di non aver sbagliato chat?",
                        status: "sent"
                    },
                    {
                        data : "13/11/2021  13:27:56",
                        text : "Ah scusa!",
                        status: "received",
                        posizione :"last"

                    }
                ]
            },

            // Luisa
            {
                nome:"Luisa",
                immagine: "img/avatar_io.jpg",
                visibile: false,
                messages : [
                    {
                        data : "13/11/2021  10:12:14",
                        text : "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent"
                    },
                    {
                        data : "13/11/2021  13:13:36",
                        text : "Si, ma preferirei andare al cinema",
                        status: "received",
                        posizione :"last"
                        
                    }
                ]
            }
        ]
    },
    methods : {
        activeChat(iterazione){
            this.contatti.find((element)=>{
                element.visibile = false
            })
             if (this.contatti[iterazione].visibile === false ){
                this.contatti[iterazione].visibile = true
            }
        },
        invio(event){
           
            let messaggioDaInviare = {
                data: "14/11/2022  14:30:35",
                text : event.target.value,
                status : "sent",
            }

            let messaggioRicevuto = {

                data: "14/11/2022  14:30:36",
                text : "ok",
                status : "received",
                posizione : "last"
            }
            this.contatti.find((element)=>{
                if ( element.visibile === true) {
                    element.messages.push(messaggioDaInviare);
                    setTimeout(()=> element.messages.push(messaggioRicevuto),1000);
                }


                
            })
        },
        
        
    }


})