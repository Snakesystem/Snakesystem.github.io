<script>
  import { onMount } from "svelte";
  import Swiper from "swiper";
  import { Autoplay } from "swiper/modules";
  import { Pagination } from "swiper/modules";
  import { testimonials } from '../portfolio-data.json';
  import { t } from "../lang";

  onMount(() => {
    new Swiper(".swiper", {
      modules: [Pagination, Autoplay],
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    });
  });
</script>

<section id="testimonials" class="testimonials section">
  <!-- Section Title -->
  <div class="container section-title" data-aos="fade-up">
    <h2>{$t('testimoni_title')}</h2>
    <p>{$t('testimoni_desc')}</p>
  </div>
  <!-- End Section Title -->

  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="swiper init-swiper">
      <div class="swiper-pagination"></div>
      <div class="swiper-wrapper">
        {#each testimonials as testiomonial}
        <div class="swiper-slide">
            <div class="testimonial-item">
              <div class="row gy-4 justify-content-center">
                <div class="col-lg-6">
                  <div class="testimonial-content">
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      <span
                        >{testiomonial.description}</span
                      >
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                    <h3>{testiomonial.name}</h3>
                    <h4>{testiomonial.position}</h4>
                    <div class="stars">
                      {#each Array(testiomonial.star) as _}
                        <i class="bi bi-star-fill"></i>
                      {/each}
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 text-center">
                  <img
                    src={testiomonial.image}
                    class="img-fluid testimonial-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/each}
        <!-- End testimonial item -->
      </div>
    </div>
  </div>
</section>

<style scoped>
  @media screen and (max-width: 768px) {
    #testimonials .section-title {
      margin-bottom: -3rem;
    }

    #testimonials .section-title h2 {
      font-size: 1.6rem;
    }

    #testimonials .section-title p {
      font-size: 0.9rem;
    }
  }
</style>
