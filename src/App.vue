<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Journal</RouterLink>
        <RouterLink to="/add_contact">Ajouter un contact</RouterLink>
        <RouterLink to="/clavier">Clavier</RouterLink>
        <RouterLink to="/contacts">contacts</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
