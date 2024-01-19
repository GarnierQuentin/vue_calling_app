import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import addContactView from '../views/AddContactView.vue'
import ClavierView from '../views/ClavierView.vue'
import ContactsView from '../views/ContactsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add_contact',
      name: 'add_contact',
      component: addContactView
    },
    {
      path: '/clavier',
      name: 'clavier',
      component: ClavierView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
  ]
})

export default router
