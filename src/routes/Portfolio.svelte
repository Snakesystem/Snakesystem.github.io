<script lang="ts">
  import { onMount } from 'svelte';
  import Isotope from 'isotope-layout';
  import GLightbox from 'glightbox';
  import { openModal } from '../lib/app'
  import ModalContainer from '../lib/ModalContainer.svelte';
  import PortfolioDetail from './PortfolioDetail.svelte';
  import { data } from '../portfolio-data.json';
  import imagesLoaded from 'imagesloaded';
  import { t } from '../lang';

  let iso = null;
  let detailData = $state({
    title: '',
    description: '',
    image: '',
  });

  onMount(() => {
    const container = document.querySelector('.isotope-container');
  
    // Tunggu semua gambar di container selesai dimuat sebelum inisialisasi
    (imagesLoaded as any)(container, () => {
      iso = new Isotope(container, {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
      });
    });

    const filters = document.querySelectorAll('.portfolio-filters li');
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        filters.forEach(el => el.classList.remove('filter-active'));
        filter.classList.add('filter-active');
        const filterValue = filter.getAttribute('data-filter');
        iso?.arrange({ filter: filterValue });
      });
    });

    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      zoomable: true,
      moreText: 'Lihat Selengkapnya',
      plyr: { css: '', js: '' },
      descPosition: 'left',
    });
  });
</script>

<section id="portfolio" class="portfolio section">
  <div class="container section-title" data-aos="fade-up">
    <h2>{$t('portfolio_title')}</h2>
    <p>{$t('portfolio_desc')}</p>
  </div>

  <div class="container">
    <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
      <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
        <li data-filter="*" class="filter-active">All</li>
        <li data-filter=".filter-web-api">Web API</li>
        <li data-filter=".filter-frontend">Frontend</li>
        <li data-filter=".filter-others">Others</li>
      </ul>

      <div class="row gy-4 isotope-container custom-container" data-aos="fade-up" data-aos-delay="200">
        {#each data as item}
          <a href={null} onclick={() => {
            openModal('portfolio-detail');
            detailData = item
          }} class={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.category}`}>
            <img src={item.image !== '' ? item.image : '/img/portfolio/onprogress.png'} class="img-fluid" alt={item.title}/>
            <div class="portfolio-info">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>
<ModalContainer title="Detail Portfolio {detailData.title}" size="full" id="portfolio-detail"  >
  <PortfolioDetail data={detailData}/>
</ModalContainer>

<style>
  /* optional: bi icon support if belum ada */
  .custom-container {
    max-height: 500px;
    overflow-y: scroll;
    /* background-color: salmon; */
  }

  @media screen and (max-width: 768px) {

    #portfolio .section-title {
      margin-bottom: -2rem;
    }

    #portfolio .section-title h2 {
      font-size: 1.6rem;
    }

    #portfolio .section-title p {
      font-size: 0.9rem;
    }
  }
</style>
