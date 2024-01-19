import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {


    state: () => ({
        contacts: [
            {
                name: "Nicolas De Garrigues",
                number: "0668676767",
            },
            {
                name: "Thomas",
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