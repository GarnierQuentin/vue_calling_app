<script>
  import User from '../components/User.vue'
  import { useJournalStore } from '../stores/journal'

  export default {
    setup() {
      const journalStore = useJournalStore()
      return {
        journalStore
      }
    },

    components: {
      User,
    },

    computed: {
      journal() {
        return this.journalStore.historique
      }
    },
  }
</script>

<template>
  <div class="home">
    <h1>Page du journal d'apppel</h1>
    <div v-for="user in journal" :key="personnage">
      <User :user="user" />
    </div>
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

  #app{
    display: grid;
    grid-template-rows: 1fr 4fr;
    height: 100vh;
    width: 100%;
  }

  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .user-card{
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
  }

</style>