// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CharacterSelect from '@/views/CharacterSelect.vue';
import StyleSelect from '@/views/StyleSelect.vue';
import SceneSelect from '@/views/SceneSelect.vue';
import ImageGeneration from '@/views/ImageGeneration.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/character',
    name: 'CharacterSelect',
    component: CharacterSelect,
  },
  {
    path: '/style',
    name: 'StyleSelect',
    component: StyleSelect,
  },
  {
    path: '/scene',
    name: 'SceneSelect',
    component: SceneSelect,
  },
  {
    path: '/generate',
    name: 'ImageGeneration',
    component: ImageGeneration,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;