<template>
    <div v-if="authenticated">
        Hello {{ user.name }}!
        <button @click="logoutUser">logout</button>
    </div>
    <router-view v-slot="{ Component, route }">
        <div :key="route.name">
            <Component :is="Component" />
        </div>
    </router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import useAuth from './composable/useAuth';
import router from './router.js';

const { authenticated, user, logout } = useAuth();

onMounted(() => {
    if (authenticated.value) {
        router.push('home');
    }
});

const logoutUser = async () => {
    await logout();
    if (!authenticated.value) {
        router.push('/');
    }
};

</script>