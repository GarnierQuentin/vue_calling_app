<script>
  import Clavier from '../components/Clavier.vue'

  export default {
    name: 'ClavierView',

    components: {
      Clavier,
    },

  }
</script>

<template>
  <div class="about">
    <h1>Page du clavier</h1>
  
    <Clavier />
  </div>

  
</template>

<style lang="scss">

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: whitesmoke;
    color: black;
  }

  .about{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .clavier{
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      button{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        width: 100%;
        height: 100%;
        margin: 10px;
        border-radius: 10px;
        background-color: orange;
        color: white;
        font-size: 30px;
        margin-bottom: 20px;
      }

      button:nth-child(10){
        grid-column: 2/3;
      }
    }
  }

</style>
