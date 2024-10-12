<template>
    <div>
        <form v-on:submit.prevent="loginUser(form)">
            <input type="email" v-model="form.email" />
            <input type="password" v-model="form.password" />
            <button type="submit">Log in</button>
        </form>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import useAuth from '../composable/useAuth';
import router from '../router';

const {login, authenticated} = useAuth();

const form = reactive({
    email: '',
    password: '',
});

const loginUser = (form) => {
    login(form).then(() => {
        if (authenticated.value) {
            router.push('home');
        }
    });
};

onMounted(() => {
    if (authenticated.value) {
        router.push('home');
    }
});
</script>