<script>
    import { useJournalStore } from '../stores/journal.js'

    export default {
        name: 'Clavier',
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

        data() {
            return {
                phone_number: "",
            }
        },

        methods: {
            addNumber(number) {
                this.phone_number += number
            },

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

    <div class="number">
        <h1>{{ phone_number }}</h1>
    </div>

    <div class="existing_contact">
        <h2></h2>
    </div>

    <div class="clavier">
        <button @click="addNumber('1')">1</button>
        <button @click="addNumber('2')">2</button>
        <button @click="addNumber('3')">3</button>
        <button @click="addNumber('4')">4</button>
        <button @click="addNumber('5')">5</button>
        <button @click="addNumber('6')">6</button>
        <button @click="addNumber('7')">7</button>
        <button @click="addNumber('8')">8</button>
        <button @click="addNumber('8')">9</button>
        <button @click="addNumber('0')">0</button>
    </div>

    <input type="image" src="https://i.pinimg.com/originals/81/45/bd/8145bd48b6b0593d01d69d499d2a1f8f.png" @click="ajoutHistorique(phone_number)">

</template>


<style lang="scss">

</style>