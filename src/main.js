import { mount } from 'svelte'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.css'
import './assets/css/main.css'
import 'aos/dist/aos.css';
import * as bootstrap from 'bootstrap'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
