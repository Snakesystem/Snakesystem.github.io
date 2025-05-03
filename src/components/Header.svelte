<script>
  import { onMount } from 'svelte';

  let isMenuOpen = false;

  function navmenuScrollspy() {
    const navmenulinks = document.querySelectorAll('.navmenu a');
    navmenulinks.forEach(navmenulink => {
      // @ts-ignore
      if (!navmenulink.hash) return;
      // @ts-ignore
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;

      const position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= (section.offsetTop + section.offsetHeight)
      ) {
        document.querySelectorAll('.navmenu a.active')
          .forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }

  onMount(() => {
    navmenuScrollspy(); // run once on mount
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);

    return () => {
      window.removeEventListener('load', navmenuScrollspy);
      document.removeEventListener('scroll', navmenuScrollspy);
    };
  });

  function headerToggle() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header id="header" class="header d-flex flex-column justify-content-center {isMenuOpen ? 'header-show' : ''}">

    <button aria-label="Toggle Navigation" class="btn header-toggle d-xl-none bi bi-{isMenuOpen ? 'x' : 'list'}" onclick={headerToggle}></button>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="#hero" class="active" onclick={() => isMenuOpen = false}><i class="bi bi-house navicon"></i><span>Home</span></a></li>
        <li><a href="#about" onclick={() => isMenuOpen = false}><i class="bi bi-person navicon"></i><span>About</span></a></li>
        <li><a href="#resume" onclick={() => isMenuOpen = false}><i class="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
        <li><a href="#portfolio" onclick={() => isMenuOpen = false}><i class="bi bi-images navicon"></i><span>Portfolio</span></a></li>
        <li><a href="#services" onclick={() => isMenuOpen = false}><i class="bi bi-hdd-stack navicon"></i><span>Services</span></a></li>
        <li><a href="#contact" onclick={() => isMenuOpen = false}><i class="bi bi-envelope navicon"></i><span>Contact</span></a></li>
      </ul>
    </nav>

</header>