import { createRouter, createWebHistory } from "vue-router"
import Home from '../components/home/Home.vue'
import About from '../components/about/About.vue'
import Pricing from "../components/pricing/Pricing.vue"
import Team from "../components/team/Team.vue"


// Routes
const routes = [
    {
        path: '/',
        name: 'Name',
        component: Home
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: Pricing
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router