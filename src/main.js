import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router';
import Instaclone from './components/Instaclone';
import home from './components/Home.vue';

import BaseCard from './components/UI/BaseCard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/webpage/', component: home},
        {path: '/webpage/project1', component: Instaclone}
    ]
});

const app = createApp(App);

app.component('base-card', BaseCard);

app.use(router);

app.mount('#app');