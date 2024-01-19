import { defineStore } from "pinia";

export const useJournalStore = defineStore("journal", {


    state: () => ({
        contacts: [
            {
                prenom: "Nicolas",
                nom: " De Garrigues",
                number: "0668676767",
            },
            {
                prenom: "Thomas",
                nom: "",
                number: "0747361946",
            }
        ],
    }),

    actions: {
        ajoutContact(user) {
            this.contacts.push(user);
        },
    },
});