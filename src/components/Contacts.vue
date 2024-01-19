<script>


    export default {

        name: 'Contacts',
        props: {
            contact: {
                type: Object,
                required: true
            }
        },
    }
</script>

<template>
    <div class="contacts-card">
        <p>{{ contact.name }}</p>
        <p>{{ contact.number }}</p>
        <input type="image" src="https://i.pinimg.com/originals/81/45/bd/8145bd48b6b0593d01d69d499d2a1f8f.png">
    </div>
</template>