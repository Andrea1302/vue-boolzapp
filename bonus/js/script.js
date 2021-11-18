let now = new Date().toUTCString();


var applicazione = new Vue ({
    el: "#app",
    data : {
        imageUser : 'img/avatar_4.jpg',
        newImage : "",
        changeImage : false,
        UserName : 'Nome Utente',
        newName : "",
        changeUserName : false,
        setting : false,
        online : true,
        ricercaChat : "",
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
                        status: "sent",
                        activeInfo : false,

                    },
                    {
                        data : "15/11/2021  15:12:39",
                        text : "Ricordati di dargli da mangiare",
                        status: "sent",
                        activeInfo : false,

                    },
                    {
                        data : "15/11/2021  16:02:34",
                        text : "Tutto fatto!",
                        status: "received",
                        posizione :"last",
                        activeInfo : false,

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
                        activeInfo : false,

                    },
                    {
                        data : "14/11/2021  20:12:39",
                        text : "Bene grazie ! Stasera ci vediamo?",
                        status: "received",
                        posizione :"last",
                        activeInfo : false,
                    },
                    {
                        data : "14/11/2021  20:22:56",
                        text : "Mi piacerebbe, ma devo andare a fare la spesa.",
                        status: "sent",
                        activeInfo : false,
                    }
                ]
            },

            // Samuele 
            {
                activeInfo : false,
                nome:"Samuele",
                immagine: "img/avatar_3.jpg",
                visibile: false,
                messages : [
                    {
                        data : "13/11/2021  09:02:14",
                        text : "La Marianna va in campagna",
                        status: "received",
                        posizione :"",
                        activeInfo : false,
                    },
                    {
                        data : "13/11/2021  11:15:39",
                        text : "Sicuro di non aver sbagliato chat?",
                        status: "sent",
                        activeInfo : false,
                    },
                    {
                        data : "13/11/2021  13:27:56",
                        text : "Ah scusa!",
                        status: "received",
                        posizione :"last",
                        activeInfo : false,
                    }
                ]
            },

            // Luisa
            {
                activeInfo : false,
                nome:"Luisa",
                immagine: "img/avatar_io.jpg",
                visibile: false,
                messages : [
                    {
                        data : "13/11/2021  10:12:14",
                        text : "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                        activeInfo : false,
                    },
                    {
                        data : "13/11/2021  13:13:36",
                        text : "Si, ma preferirei andare al cinema",
                        status: "received",
                        posizione :"last",
                        activeInfo : false,
                    }
                ]
            }
        ]
    },
    methods : {
        activeChat(iterazione){
            this.contatti.forEach((element)=>{
                element.visibile = false
            })
             if (this.contatti[iterazione].visibile === false ){
                this.contatti[iterazione].visibile = true
            }
        },
        invio(event){
            now = new Date().toUTCString();
            let messaggioDaInviare = {
                data: now,
                text : event.target.value,
                status : "sent",
                activeInfo : false,
            }

            let messaggioRicevuto = {

                data: now,
                text : "ok",
                status : "received",
                posizione : "last",
                activeInfo : false,
            }
            this.contatti.forEach((element)=>{
                if ( element.visibile === true) {
                    element.messages.find((proprieta)=>{
                        if ( proprieta.posizione === "last"){
                            proprieta.posizione = ""
                        }
                    })
                }

            })
            this.contatti.forEach((element)=>{
                if ( element.visibile === true) {
                    element.messages.push(messaggioDaInviare);
                    setTimeout(()=> element.messages.push(messaggioRicevuto),1000);
                }
            })

            let element = document.querySelector('#layover_open_chat');
            element.scrollTop = element.scrollHeight - element.clientHeight;
            event.target.value = "";
        },
        miaFunzione(event){
            this.ricercaChat = event.target.value
        },
        sel_info(iterazione){
            this.contatti.forEach((element)=>{
                if ( element.visibile === true ){
                    if (element.messages[iterazione].activeInfo === false){
                        element.messages[iterazione].activeInfo = true;
                    } else if (element.messages[iterazione].activeInfo === true){
                        element.messages[iterazione].activeInfo = false;

                    }
                }
            })
            
        },
        infoMessaggio(iterazione){
            this.contatti.forEach((element)=>{
                if ( element.visibile === true) {
                    alert(`Messaggio inviato da ${element.nome}, il ${element.messages[iterazione].data}`)
                }
            })
            
        },
        deleteMessage(iterazione){
            this.contatti.forEach((element)=>{
                if ( element.visibile === true) {
                    element.messages.splice(iterazione,1);
                }
            })
        },
        statoUtente(){
            console.log("ok");
            if ( this.online === true ){
                this.online = false
            } else if (this.online === false ) {
                this.online = true
            }
        },
        settingUser(){
            if (this.setting === false) {
                this.setting = true
            } else if ( this.setting === true ) {
                this.setting = false
            }
        },
        cambiaUserName(){
            if ( this.changeUserName === false){
                this.changeUserName = true
            } 
        },
        toCloseChangeUserName(){
            this.changeUserName = false;
            this.setting = false
        },
        invioNewName(){
            this.UserName = this.newName;
            this.changeUserName = false;
            this.setting = false
            this.newName = "";

        },
        invioNewImage(){
            this.changeImage = false;
            this.setting = false
            if ( !this.newImage){
                this.imageUser = 'img/avatar_4.jpg'
            } else {
                this.imageUser = this.newImage;
            }
            
        },
        toCloseChangeImage(){
            this.changeImage = false;
            this.setting = false
        },
        cambiaImage(){
            if ( this.changeImage === false){
                this.changeImage = true
            }
        }
    }


})

