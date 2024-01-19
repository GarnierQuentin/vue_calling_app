<script>
    import { useJournalStore } from '../stores/journal.js'

    export default {

        name: 'Contacts',
        props: {
            contact: {
                type: Object,
                required: true
            }
        },

        setup() {
            const user = useJournalStore()
            return {
                user
            }
        },

        methods: {
            ajoutHistorique(number) {
                this.form = {   
                    id: number,
                    date: new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate(),
                    heure: new Date().getHours() + ":" + new Date().getMinutes(),
                }
                this.user.ajoutHistorique(this.form)
            },
        },
    }
</script>

<template>
    <div class="contacts-card">
        <p>{{ contact.name }}</p>
        <p>{{ contact.number }}</p>
        <input type="image" src="https://i.pinimg.com/originals/81/45/bd/8145bd48b6b0593d01d69d499d2a1f8f.png" @click="ajoutHistorique(contact.name)">
    </div>
</template>