import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
import PagePlacesAll from "@/components/PagePlacesAll.vue";
import PagePlaceDetails from "@/components/PagePlaceDetails.vue";
import './assets/styles/light.css';
import './assets/styles/dark.css';
import './assets/styles/fonts.css';

const routes = [
    {path: "/places", component: PagePlacesAll},
    {path: "/places/:id", name: "PlaceDetails", component: PagePlaceDetails, props: true}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.body.classList.add(prefersDark ? 'dark' : 'light');

createApp(App).use(router).mount('#app')
