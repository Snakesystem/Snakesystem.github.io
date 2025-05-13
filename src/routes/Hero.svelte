<script>
  import { t } from "../lang";
  import TypeingEffect from "../lib/TypeingEffect.svelte";

</script>
<section id="hero" class="hero section">             
  <img src="/img/hero-bg.jpeg" alt="" />
  <div class="container" data-aos="zoom-out">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h2>Feri Irawansyah</h2>
        <p>{$t("profesional")} 
         <TypeingEffect words={['Programmer', 'Developer', 'Freelancer', 'Software Engineer']} />
        </p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/feri-irawansyah/" target="_blank"  aria-label="Linkedin"><i class="bi bi-linkedin"></i></a>
          <a href="https://github.com/snakesystem/" aria-label="Github" target="_blank"><i class="bi bi-github"></i></a>
          <a href="https://www.instagram.com/fery_ir.1/" target="_blank"  aria-label="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="https://www.facebook.com/fery.irawansyah.58/" target="_blank" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://x.com/snakesystem" target="_blank" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
        </div>
        <nav id="custom-menu" class="custom-menu">
          <ul class="d-flex flex-row list-unstyled">
            <li><a href="#hero" class="active" onclick={() => {}}><i class="bi bi-house navicon"></i><span>{$t("home")}</span></a></li>
            <li><a href="#about" onclick={() => {}}><i class="bi bi-person navicon"></i><span>{$t("about")}</span></a></li>
            <li><a href="#resume" onclick={() => {}}><i class="bi bi-file-earmark-text navicon"></i><span>{$t("resume")}</span></a></li>
            <li><a href="#portfolio" onclick={() => {}}><i class="bi bi-images navicon"></i><span>{$t("portfolio")}</span></a></li>
            <li><a href="#services" onclick={() => {}}><i class="bi bi-hdd-stack navicon"></i><span>{$t("services")}</span></a></li>
            <li><a href="#blog" onclick={() => {}}><i class="bi bi-journal navicon"></i><span>{$t("blog")}</span></a></li>
            <li><a href="#contact" onclick={() => {}}><i class="bi bi-envelope navicon"></i><span>{$t("contact")}</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>

<style scoped>

  .custom-menu {
    margin: 2rem 0 1rem -1rem;
  }

  .custom-menu a {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    transition: all 0.3s ease;
    /* background: color-mix(in srgb, var(--default-color), transparent 92%); */
  }

  .custom-menu a i {
    color: var(--nav-color);
    font-family: var(--nav-font);
    display: flex;
    align-items: center;
    padding: 18px;
    margin-bottom: 8px;
    font-size: 20px;
    border-radius: 50px;
    background: color-mix(in srgb, var(--default-color), transparent 92%);
    transition: transform 0.3s ease;
    border: 5px solid color-mix(in srgb, var(--default-color), transparent 100%);
  }

  .custom-menu a span {
    position: absolute;
    top: 0;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 1rem;
    white-space: nowrap;
    z-index: 1;
  }

  .custom-menu a:hover i {
    transform: translateY(35px);
    color: var(--contrast-color);
    background: var(--nav-hover-color);
    /* border-color: color-mix(in srgb, var(--default-color), transparent 100%); */
  }

  .custom-menu a:hover {
    /* background: var(--nav-hover-color); */
    border-radius: 6px;
  }

  .custom-menu a:hover span {
    opacity: 1;
    transform: translateY(0);
    color: var(--default-color);
    font-weight: 600;
    background: transparent;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    img {
      object-position: left center; /* atau center center kalau lo mau pindah ke tengah */
    }

    .custom-menu {
      display: none;
      margin: 2rem 0 1rem -0.5rem;
    }

    .custom-menu a {
      flex-wrap: wrap;
      padding: 0 0.1rem;
      transition: all 0.3s ease;
    }

    .custom-menu a i {
      padding: 14px;
      border: 0;
    }
  }
</style>
