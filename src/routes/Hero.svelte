<script>
  import TypeingEffect from "../lib/TypeingEffect.svelte";

</script>
<section id="hero" class="hero section light-background">
  <img src="/img/hero-bg.jpeg" alt="" />

  <div class="container" data-aos="zoom-out">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h2>Feri Irawansyah</h2>
        <p>I'm 
         <TypeingEffect words={['Programmer', 'Developer', 'Freelancer', 'Software Engineer']} />
        <span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
        </p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/feri-irawansyah/" target="_blank"  aria-label="Linkedin"><i class="bi bi-linkedin"></i></a>
          <a href="https://github.com/snakesystem/" aria-label="Github" target="_blank"><i class="bi bi-github"></i></a>
          <a href="https://www.instagram.com/fery_ir.1/" target="_blank"  aria-label="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="https://www.facebook.com/fery.irawansyah.58/" target="_blank" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://x.com/snakesystem" target="_blank" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>
