<script lang="ts">
  import { onMount } from 'svelte';
  import Isotope from 'isotope-layout';
  import GLightbox from 'glightbox';
  const portfolioData = [
    {
      title: "App 1",
      category: "app",
      image: "/img/masonry-portfolio/masonry-portfolio-1.jpg",
      gallery: "portfolio-gallery-app"
    },
    {
      title: "Product 1",
      category: "product",
      image: "/img/masonry-portfolio/masonry-portfolio-2.jpg",
      gallery: "portfolio-gallery-product"
    },
    {
      title: "Branding 1",
      category: "branding", 
      image: "/img/masonry-portfolio/masonry-portfolio-3.jpg",
      gallery: "portfolio-gallery-branding"
    },
    // ...lanjut
  ];

  let iso = null;

  onMount(() => {
    const container = document.querySelector('.isotope-container');
    iso = new Isotope(container, {
      itemSelector: '.isotope-item',
      layoutMode: 'masonry'
    });

    const filters = document.querySelectorAll('.portfolio-filters li');
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        filters.forEach(el => el.classList.remove('filter-active'));
        filter.classList.add('filter-active');
        const filterValue = filter.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
      });
    });

    GLightbox({ selector: '.glightbox' });
  });
</script>

<section id="portfolio" class="portfolio section">
  <div class="container section-title" data-aos="fade-up">
    <h2>Portfolio</h2>
    <p>Deskripsi portfolio di sini...</p>
  </div>

  <div class="container">
    <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
      <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
        <li data-filter="*" class="filter-active">All</li>
        <li data-filter=".filter-app">App</li>
        <li data-filter=".filter-product">Card</li>
        <li data-filter=".filter-branding">Web</li>
      </ul>

      <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
        {#each portfolioData as item}
          <div class={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.category}`}>
            <img src={item.image} class="img-fluid" alt={item.title} />
            <div class="portfolio-info">
              <h4>{item.title}</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href={item.image} title={item.title} data-gallery={item.gallery} class="glightbox preview-link" aria-label={item.title}>
                <i class="bi bi-zoom-in"></i>
              </a>
              <a href="portfolio-details.html" title="More Details" class="details-link" aria-label="More Details">
                <i class="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  /* optional: bi icon support if belum ada */
</style>
