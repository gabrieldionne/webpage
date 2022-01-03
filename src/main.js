import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router';
import GpaCalculator from './components/GpaCalculator';
import home from './components/Home.vue';

import BaseCard from './components/UI/BaseCard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/webpage/', component: home},
        {path: '/webpage/project1', component: GpaCalculator}
    ]
});

const app = createApp(App);

app.component('base-card', BaseCard);

app.use(router);

app.mount('#app');