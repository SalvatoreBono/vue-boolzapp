"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            contatti: [
                {
                    name: "Michele",
                    avatar: "_1",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "_2",
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "_3",
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "_6",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
            ],
            contact: null,
            myMessage: [
                {
                    message: ``,
                    status: ``,
                }
            ],
            search: ``,
        };
    },
    methods: {
        currentContact(singleContact) {
            //contact contiene il singolo oggetto cliccato
            this.contact = singleContact;
        },

        sendMessage() {
            /* creo il clone */
            const myMessageClone = { ...this.myMessage };

            /* specifico lo status */
            myMessageClone.status = `sent`;

            /* pusho il messaggio nel contact.messages */
            this.contact.messages.push(myMessageClone);

            /* faccio si che la funzione "messageOK" venga eseguita 1s dopo l'invio del messaggio utente */
            setTimeout(this.messageOK, 1000);
        },

        messageOK() {

            /* creo il clone */
            const myMessageClone = { ...this.myMessage };

            /* specifico lo status */
            myMessageClone.status = `received`;

            /* specifico il messaggio che voglio ricevere */
            myMessageClone.message = `Ok`;

            /* pusho il messaggio nel contact.messages */
            this.contact.messages.push(myMessageClone);
        },
    },

    /* "COMPUTED" Osserva constantemente l'HTML e alla modifica di quest'ultimo COMPUTED viene eseguito*/
    /*    computed: {
           filteredContact() {
               return this.contatti.filter(singleContact => {
                   return singleContact.name.toLowerCase().includes(this.search.toLowerCase())
               })
           }
       }, */

    /* Quando Vue legge l'html e cerca di accedere alla variabile "contact", siccome questa è null, avremo un errore. Allora, Prima che Vue legga l'HTML, assegniamo un valore iniziale alla variabile contact. 
    L'evento "beforeMount" viene eseguito esattamente prima che l'html venga gestito da Vue.  */
    beforeMount() {
        this.contact = this.contatti[0];
    },

}).mount('#app');