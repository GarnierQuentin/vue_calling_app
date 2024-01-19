<script>
    import { useJournalStore } from '../stores/journal'

    export default {

        name: 'User',
        props: {
            user: {
                type: Object,
                required: true
            }
        },
    }
</script>

<template>
    <div class="user-card">
        <p>{{ user.id }}</p>
        <p>Le {{ user.date }} à {{ user.heure }}</p>
        <input type="image" src="https://i.pinimg.com/originals/81/45/bd/8145bd48b6b0593d01d69d499d2a1f8f.png">
    </div>
</template>