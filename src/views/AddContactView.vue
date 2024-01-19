<script>

import FormContact from '../components/FormContact.vue'
export default {
  name: 'AddContactView',

  components: {
    FormContact,
  },

}

</script>


<template>
  <div>
    <h1>Page d'ajout de contact</h1>
  </div>
  
  <FormContact />
</template>

<style lang="scss">
  body{
    background-color: whitesmoke;
    color: black;
  }
</style>