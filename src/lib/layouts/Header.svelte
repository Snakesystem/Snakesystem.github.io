<script lang="ts">
  import { appRoutes, urlHistory } from '../../app/app';
  import { link } from "svelte-spa-router"

  const props = $props();

  // List menu yang akan di-loop
  const navLinks = [
      { route: appRoutes.HOME, icon: "bi-house-check-fill", label: "Home" },
      { route: appRoutes.EXPERIENCE, icon: "bi-pencil", label: "Experience" },
      { route: appRoutes.SKILLS, icon: "bi-braces-asterisk", label: "Skill" },
      { route: appRoutes.PROJECT, icon: "bi-image", label: "Project" },
      { route: appRoutes.CONTACT, icon: "bi-envelope", label: "Contact" }
  ];
</script>

<nav>
  <div class="logo m-0 mt-5 d-flex flex-row align-items-center justify-content-center gap-3">
      <span style="color: aliceblue; font-size: 25px; font-weight: bold">Feri Irawansyah</span>
  </div>
  <div class="mini-logo m-0 mt-3">
      <img src="img/logo-ss.png" alt="" style="width: 100px; height: 100px; border-radius: 50%;">
  </div>
  <ul>
      {#each navLinks as linked, i}
          <li>
              <a  use:link href={linked.route} class="{$urlHistory === linked.route ? 'active' : ''}" 
              onclick={() => {
                  props.showSlide(i);
                  urlHistory.set(linked.route);
                }}>
                  <i class="bi {linked.icon}"></i> <em>{linked.label}</em>
              </a>
          </li>
      {/each}
  </ul>
</nav>

<style scoped>
  .active {
      color: #fff !important;
      background-color: #fff !important;
      color: #202020 !important;
  }

  @media screen and (max-width: 920px) {
      .logo span {
          display: none;
      }
  }
</style>
