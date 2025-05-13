<script lang="ts">
  import { onMount } from 'svelte';
  import { currentLocale } from '../lang';
  import { get } from 'svelte/store';

  let open = false;
  let isDark = true;

  const toggleDropdown = () => {
    open = !open;
  };

  const toggleLanguage = () => {
    const lang = get(currentLocale);
    currentLocale.set(lang === 'en' ? 'id' : 'en');
  };

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === null) {
      localStorage.setItem('theme', 'dark');
      isDark = true;
    } else {
      isDark = savedTheme === 'dark';
    }
    updateBodyClass();
  });

  const toggleTheme = () => {
    isDark = !isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateBodyClass();
  };

  const updateBodyClass = () => {
    const body = document.body;
    if (isDark) {
      body.classList.add('dark-background');
    } else {
      body.classList.remove('dark-background');
    }
  };
  
</script>

<button
  class="settings"
  aria-label="Settings"
  type="button"
  on:click={toggleDropdown}
  style="transform: rotate({open ? 180 : 0}deg);">
  <i class="bi bi-gear"></i>
</button>

<div class="dropdown-container {open ? 'show' : ''}">
  <button class="btn btn-lang" aria-label="Toggle language" on:click={toggleLanguage}>
    <i class="bi bi-translate"></i>
  </button>
  <button class="btn btn-theme" aria-label="Theme" on:click={toggleTheme}>
    <i class={`bi ${isDark ? 'bi-moon' : 'bi-sun'}`}></i>
</button>
</div>

<style>
  .settings {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 9999;
    border: none;
    color: var(--contrast-color);
    font-family: var(--nav-font);
    width: 44px;
    height: 44px;
    font-size: 20px;
    border-radius: 50px;
    background: var(--nav-hover-color);
    transition: transform 0.4s ease;
  }

  .dropdown-container {
    z-index: 9999;
    position: fixed;
    bottom: 7.3rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .dropdown-container.show {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .btn-lang, .btn-theme {
    z-index: 9999;
    border: none;
    color: var(--contrast-color);
    font-family: var(--nav-font);
    width: 44px;
    height: 44px;
    font-size: 20px;
    border-radius: 50px;
    background: var(--nav-hover-color);
    transition: transform 0.4s ease;
  }

  .btn-lang:hover, .btn-theme:hover {
    transform: scale(1.1);
  }
</style>
