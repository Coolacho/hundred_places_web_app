import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
import PagePlacesAll from "@/components/PagePlacesAll.vue";
import PagePlaceDetails from "@/components/PagePlaceDetails.vue";

const routes = [
    {path: "/places", component: PagePlacesAll},
    {path: "/places/:id", component: PagePlaceDetails}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

createApp(App).use(router).mount('#app')
