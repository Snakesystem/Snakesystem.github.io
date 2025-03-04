<script lang="ts">
    import { links, useLocation } from 'svelte-routing';
    import { appRoutes, slider, urlHistory } from '../../app/app';

    const history = useLocation();

    $effect(() => {
      history.subscribe((value) => {
        urlHistory.set(value.pathname);
      })
    })

</script>

<nav>
    <div class="logo m-0 mt-5 d-flex flex-row align-items-center justify-content-center gap-3">
      <span style="color: aliceblue; font-size: 25px; font-weight: bold">Feri Irawansyah</span>
    </div>
    <div class="mini-logo m-0  mt-3">
        <img src="img/logo-ss.png" alt="" style="width: 100px; height: 100px; border-radius: 50%;">
    </div>
    <ul use:links>
      <li>
        <a href={appRoutes.HOME} 
          class="{$urlHistory === appRoutes.HOME ? 'active' : ''}" >
          <i class="bi bi-house-check-fill"></i> <em>Home</em>
        </a>
      </li>
      <li>
        <a href={appRoutes.EXPERIENCE} class="{$urlHistory === appRoutes.EXPERIENCE ? 'active' : ''}" onclick={() => slider.set("transform: translateX(-100vw);")}>
          <i class="bi bi-pencil"></i> <em>Experience</em>
        </a>
      </li>
      <li>
        <a href={appRoutes.SKILLS} class="{$urlHistory === appRoutes.SKILLS ? 'active' : ''}"  onclick={() => slider.set("transform: translateX(-100vw);")}>
          <i class="bi bi-braces-asterisk"></i> <em>Skill</em>
        </a>
      </li>
      <li>
        <a href={appRoutes.PROJECT} class="{$urlHistory === appRoutes.PROJECT ? 'active' : ''}">
          <i class="bi bi-image"></i> <em>Project</em>
        </a>
      </li>
      <li>
        <a href={appRoutes.CONTACT} class="{$urlHistory === appRoutes.CONTACT ? 'active' : ''}">
          <i class="bi bi-envelope"></i> <em>Contact</em>
        </a>
      </li>
    </ul>
</nav> 

<style scoped>
  .active {
    color: #fff !important;
    background-color: #fff !important;
    color: #202020 !important;
    /* padding: 69px !important; */
  }

  @media screen and (max-width: 920px) {
    .logo span {
      display: none;
    }
  }
</style>