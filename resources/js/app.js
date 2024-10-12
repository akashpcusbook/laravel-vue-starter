import './bootstrap';

import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import useAuth from './composable/useAuth';

const { attempt, authenticated } = useAuth();

const app = createApp(App);

attempt().then(() => {
    app.use(router).mount('#app');
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (authenticated.value) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
});
