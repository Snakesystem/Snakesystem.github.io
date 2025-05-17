import { mount } from 'svelte'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/css';
import 'swiper/css/pagination';
import './assets/css/main.css'
import 'aos/dist/aos.css';
import * as bootstrap from 'bootstrap'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
