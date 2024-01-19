import { defineStore } from "pinia";

export const useJournalStore = defineStore("journal", {


    state: () => ({
        historique: [
            {
                id: "Nicolas De Garrigues",
                date: "2021-08-01",
                heure: "10:00",
                number: "0668676767",
            },
            {
                id: "Thomas",
                date: "2023-04-02",
                heure: "19:27",  
                number: "0747361946",
            }
        ],
    }),

    actions: {
        ajoutHistorique(user) {
            this.historique.push(user);
        },
    },
});