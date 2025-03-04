import { mount } from 'svelte'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/light-box.css'
import './assets/index.css'
import App from './lib/App.svelte'
import Notfound from './lib/pages/Notfound.svelte';

const app = mount(Notfound, {
  target: document.getElementById('app')!,
})

export default app
