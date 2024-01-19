<script>
import { useContactStore } from '../stores/contacts.js'
import Contacts from '../components/Contacts.vue'

export default {
  name: 'ContactsView',

  setup() {
      const user = useContactStore()
      return {
          user
      }
  },

  components: {
    Contacts,
  },

  computed: {
      contacts() {
          return this.user.contacts
      }
  },
}
</script>



<template>
  <div>
    <h1>Page des contacts</h1>

    <div v-for="contact in contacts">
        <Contacts :contact="contact" />
    </div>
  </div>
</template>

<style lang="scss">

    .contacts-card{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 3px solid orange;
      margin: 10px;
      padding: 20px;
      border-radius: 10px;
    }

    input{
      width: 25%;
      height: 25%;
    }
</style>