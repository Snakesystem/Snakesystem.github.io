<script>
  import { onMount } from 'svelte';
  import { t } from '../lang';

  let isMenuOpen = false;

  function navmenuScrollspy() {
    const navmenulinks = document.querySelectorAll('.navmenu a');
    
    const header = document.querySelector('#header');

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
          .forEach(link => {

            const active_link = link.getAttribute('href');

            if(active_link === "#hero" && window.innerWidth > 768) {
              header.classList.add('d-none');
            } else {
              header.classList.remove('d-none');
            }

            return link.classList.remove('active')
          });
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
        <!-- <li><a href={null} onclick={() => {}} style="cursor: pointer;"><i class="bi bi-sun"></i><span>{$t("theme_dark")}</span></a></li> -->
        <li><a href="#hero" class="active" onclick={() => isMenuOpen = false}><i class="bi bi-house navicon"></i><span>{$t("home")}</span></a></li>
        <li><a href="#about" onclick={() => isMenuOpen = false}><i class="bi bi-person navicon"></i><span>{$t("about")}</span></a></li>
        <li><a href="#resume" onclick={() => isMenuOpen = false}><i class="bi bi-file-earmark-text navicon"></i><span>{$t("resume")}</span></a></li>
        <li><a href="#portfolio" onclick={() => isMenuOpen = false}><i class="bi bi-images navicon"></i><span>{$t("portfolio")}</span></a></li>
        <li><a href="#services" onclick={() => isMenuOpen = false}><i class="bi bi-hdd-stack navicon"></i><span>{$t("services")}</span></a></li>
        <li><a href="#blog" onclick={() => isMenuOpen = false}><i class="bi bi-journal navicon"></i><span>{$t("blog")}</span></a></li>
        <li><a href="#contact" onclick={() => isMenuOpen = false}><i class="bi bi-envelope navicon"></i><span>{$t("contact")}</span></a></li>
      </ul>
    </nav>

</header>