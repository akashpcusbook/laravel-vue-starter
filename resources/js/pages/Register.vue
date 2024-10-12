<script setup>
import axios from 'axios'

const register = () => {
    axios.get('/sanctum/csrf-cookie')

    axios.post('/register', form).then(() => {
        attempt().then(() => {
            // Redirect user to their dashboard, for example
        })
    }).catch(e => {
        // Handle registration errors
    })
}
</script>