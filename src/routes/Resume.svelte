<script>
  import { t } from "../lang";

</script>
<section id="resume" class="resume section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>{$t('resume_title')}</h2>
      <p>{$t('resume_desc')}</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="row">

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">{$t('resume_summary')}</h3>

          <div class="resume-item pb-0">
            <h4>Feri Irawansyah</h4>
            <p><em>I'm a Freelancer, Programmer, and Software Engineer with 4+ years of experience in web development.</em></p>
            <ul>
              <li>Gg. Haji Mumun no 5, Kota Depok</li>
              <li>(+62) 82323443535</li>
              <li>feryirawansyah09@gmail.com</li>
            </ul>
          </div>

          <h3 class="resume-title">Education</h3>
          
          <div class="resume-item">
            <h4>{$t('resume_bachelor')}</h4>
            <h5>2019 - 2023</h5>
            <p><em>Universitas Pamulang, Tangerang, Indonesia</em></p>
            <p>{$t('resume_bachelor_desc')}</p>
          </div>

          <div class="resume-item">
            <h4>{$t('resume_vocation')}</h4>
            <h5>2016 - 2019</h5>
            <p><em>SMK Miftahul Ulum, Jawa Tengah, Indonesia</em></p>
            <p>{$t('resume_vocation_desc')}</p>
          </div>

        </div>

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <h3 class="resume-title">{$t('resume_profesional')}</h3>
          <div class="resume-item">
            <h4>Web Developer</h4>
            <h5>2022 - Present</h5>
            <p><em>PT S21 Micropiranti Computer, Jakarta, Indonesia</em></p>
            <ul>
              {#each Array(7) as _, i}
                <li>{$t('resume_profesional_desc' + (i + 1))}</li>
              {/each}
            </ul>
          </div><!-- Edn Resume Item -->

          <div class="resume-item">
            <h4>{$t('resume_more')}</h4>
            <a target="_blank" class="btn btn-primary btn-sm w-100" href="https://www.linkedin.com/in/feri-irawansyah/">{$t('resume_more_link')}</a>
          </div><!-- Edn Resume Item -->

        </div>
      </div>
    </div>
  </section>

<style scoped>
  @media screen and (max-width: 768px) {

    #resume p, li {
      font-size: 0.9rem;
    }

    #resume .section-title {
      margin-bottom: -2rem;
    }

    #resume .section-title h2 {
      font-size: 1.6rem;
    }

    #resume .section-title p {
      font-size: 0.9rem;
    }
  }
</style>