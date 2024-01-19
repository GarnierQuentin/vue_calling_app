<script>
    import { useContactStore } from '../stores/contacts.js'
    import User from '../components/User.vue'
    export default {
        name: 'FormContact',

        components: {
            User,
        },

        data() {
            return {
                formUser: {
                    name: '',
                    number: '',
                },
            }
        },

        setup() {
            const user = useContactStore()
            return {
                user
            }
        },


        methods: {
            ajoutContact() {
                this.user.ajoutContact(this.formUser)
                this.formUser = {
                    name: '',
                    number: '',
                }
            },
        },
    }
</script>


<template>

    <form @submit.prevent="ajoutContact()">
        <input type="text" placeholder="Nom" v-model="formUser.name">
        <input type="text" placeholder="Numéro" v-model="formUser.number">
        <button type="submit">Ajouter</button>
    </form>

</template>