import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'
import Toaster from '@meforma/vue-toaster';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function loggedIn(){
    return localStorage.getItem('token')
}



const app = createApp(App)

app.use(router)
app.use(Toaster)
app.use(VueSweetalert2)
app.mount('#app')
