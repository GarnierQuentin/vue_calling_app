<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Journal</RouterLink>
        <RouterLink to="/clavier">Clavier</RouterLink>
        <RouterLink to="/contacts">contacts</RouterLink>
      </nav>
    </div>
  </header>

  <div id="add">
    <RouterLink to="/add_contacts"><input type="image" src="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-svg-png-icon-download-1.png"></RouterLink>
  </div>
  <RouterView />
</template>
  
<style scoped>
  #add{
    position: fixed;
    bottom: 10;
    right: 10;
    margin: 20px;
    width: 3%;
  }

  #add input{
    width: 100%;
    height: 100%;
  }
</style>
