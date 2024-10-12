import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "login",
        component: () => import("./pages/Login.vue"),
    },
    {
        path: "/home",
        name: "home",
        component: () => import("./pages/HomeRoute.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: "/test",
        name: "test",
        component: () => import("./pages/TestRoute.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("./pages/NotFound.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});