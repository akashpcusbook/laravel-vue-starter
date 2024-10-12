import { computed, reactive, ref } from 'vue'
import axios from 'axios'

const state = reactive({
    authenticated: false,
    user: {}
});

export default function useAuth() {
    const authenticated = computed(() => state.authenticated)
    const user = computed(() => state.user)

    const setAuthenticated = (authenticated) => {
        state.authenticated = authenticated
    }

    const setUser = (user) => {
        state.user = user
    }

    const login = async (credentials) => {
        await axios.get('/sanctum/csrf-cookie');

        try {
            await axios.post('/login', credentials);
            return attempt();
        } catch (e) {
            return Promise.reject(e.response.data.errors)
        }
    }

    const attempt = async () => {
        try {
            let response = await axios.get('/api/user');

            setAuthenticated(true);
            setUser(response.data);

            return response;
        } catch (e) {
            setAuthenticated(false);
            setUser({});
        }
    }

    const logout = async () => {
        try {
            let response = await axios.post('/logout');
            setAuthenticated(false);
            setUser({});

            return response;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        authenticated,
        user,
        login,
        attempt,
        logout
    }
}