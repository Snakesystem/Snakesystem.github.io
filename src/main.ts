import { mount } from 'svelte'
import './assets/index.css'
import App from './lib/App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
