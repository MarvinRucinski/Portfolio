import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHashHistory } from "vue-router";
import Home from './components/Home.vue';
import ProjectDetail from './components/ProjectDetail.vue';
import App from './App.vue'

import './assets/main.css'

const routes = [
    { path: '/', component: Home },
    { path: '/:name/details', component: ProjectDetail },
    { path: '/404', component: { template: '<h1 style="margin-top:20px;">404 Not Found</h1> <a href="/">Go home</a>' }, name: '404' },
    { path: '/:pathMatch(.*)*', redirect: '/404' }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
app.mount('#app')
