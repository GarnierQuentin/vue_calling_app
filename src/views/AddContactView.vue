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

    <div class="form">
      <FormContact />
    </div>
  </div>
</template>

<style lang="scss">
  body{
    background-color: whitesmoke;
    color: black;
  }
  
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 200%;

      input{
        width: 25%;
        height: 25%;
      }
    }
  } 
  
</style>