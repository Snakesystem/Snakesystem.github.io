<script lang="ts">
  import { onMount } from 'svelte';
  import skillsData from '../portfolio-data.json';
  import { TabContent, TabPane } from '@sveltestrap/sveltestrap';
  import { t } from '../lang';

  const categories = ['programming', 'tech-stack', 'others'];

  let details = $state(false);

  function openDetail(data) {
    details = data;
  }

  onMount(() => {
    // inisialisasi jika perlu
  });
</script>

<section id="skills" class="skills section">
  <div class="container section-title" data-aos="fade-up">
    <h2>{$t('skill_title')}</h2>
    <p>{$t('skill_desc')}</p>
  </div>

  <div class="container">
    <div class="sticky-cards-section" data-aos="fade-up" data-aos-delay="100">
    <TabContent>
      {#each categories as category, catIndex}
        <TabPane tabId={catIndex + 1} tab={category} active={catIndex === 0}>
          {#each skillsData.skills.filter(skill => skill.category === category) as skill, index}
            <div class="card linkedin-post mb-4" style="z-index: {index + 1};">
              <div class="card-body">
                <div class="row justify-content-between">
                  <div class="col-md-10">
                    <h5 class="card-title text-danger">
                      {skill.title} {#if window.innerWidth > 768}
                        <span class="fw-bold text-warning ms-3" style="font-size: 1rem;">Started - </span> <u class="card-text updated_at ms-1"  style="font-size: 1rem;"><small class="text-muted">{skill.updated_at}</small></u>
                      {/if}
                    </h5>
                    {#if window.innerWidth < 768}
                      <span class="tfw-bold text-warning">Started - </span> <u class="card-text updated_at"><small class="text-muted">{skill.updated_at}</small></u>
                    {/if}
                    <p class="card-text text-muted {window.innerWidth < 768 && !details ? 'text-truncate' : ''}" style="font-style: italic;">
                      <small>{$t(skill.description)}</small>                    
                    </p>
                    <div class="d-flex gap-3">
                      <div class="flex-column">
                        <button onclick={() => openDetail(!details)} class="{window.innerWidth < 768 ? 'position-absolute text-primary btn p-0' : 'd-none'}" style="font-size: 0.8rem; margin-top: -1.2rem; cursor: pointer;">{details ? 'Lebih sedikit' : 'Selengkapnya'}</button>
                        <a href={skill.url} target="_blank" class="text-decoration-none" style="font-style: italic;">Learn More</a>
                        <div class="card-text"><small class="text-muted">Skill Level: <strong>{skill.progress}</strong>%</small></div>
                      </div>
                      <div class="flex-column">
                        <span class="fw-bold"><small>My Favorite</small></span>
                        <div class="stars">
                          {#each Array(skill.star) as _}
                            <i class="bi bi-star-fill text-warning"></i>
                          {/each}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 d-flex align-items-center">
                    <img class="card-img-top" src={skill.image} alt={skill.title} />
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="progress my-0" role="progressbar" aria-label="Example with label" aria-valuenow={skill.progress} aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: {skill.progress}%">{skill.progress}%</div>
                </div>
              </div>
            </div>
          {/each}
        </TabPane>
      {/each}
    </TabContent>
  </div>
  </div>
</section>
  
<style scoped>
  .sticky-cards-section {
    width: 100%;
    margin: auto;
  }
    .card {
      position: -webkit-sticky; /* Untuk Safari */
      border: none;
      position: sticky;
      top: 70px; /* Setiap card akan sticky dengan jarak top */
      width: 100%;
      margin: 20px auto;
      border-radius: 10px;
      box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.1);
      display: flex;
      align-items: stretch;
      justify-content: center;
      font-size: 18px;
      transition: all 0.3s ease-out;
      z-index: 1;
    }

    .card:hover {
      transform: scale(1.03);
      box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.2);
    }

    .card-title {
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
    }

    .card span, small, u, p, strong, a {
      color: var(--default-color);
    }

    .card-text, small, span, u, p, strong, a {
      color: var(--default-color) !important;
    }
    
    .card.linkedin-post {
        padding: 10px;
        border-left: 4px solid #0077b5;
        border-right: 4px solid #0077b5;
        border-top: 1px solid #0077b5;
        background-color: var(--background-color);
        color: var(--default-color);
    }

    .card.linkedin-post a {
        color: #0077b5;
        text-decoration: none;
        font-weight: bold;
    }

    .card.linkedin-post a:hover {
        text-decoration: underline;
    }

    .card-footer {
      padding: 0;
      border: none;
      display: flex;
      flex-direction: column;
      height: 1em;
    }
    .card-footer .progress-bar{
      height: 1em;
    }

    @media screen and (max-width: 768px) {

      #skills .section-title {
        margin-bottom: -2rem;
      }

      #skills .section-title h2 {
        font-size: 1.6rem;
      }

      #skills .section-title p {
        font-size: 0.9rem;
      }

      .card {
        top: 110px;
      }
      
      .card-body p {
        font-size: 0.9rem;
        text-align: justify;
        /* text-overflow: ellipsis; */
      }
      .card-body img {
        width: 15%;
        position: absolute;
        right: 2rem;
        margin-top: -3rem;
      }

      .updated_at{
        font-size: 1rem;
        font-weight: bold;
      }

      .card-title{
        font-size: 1.5rem;
        font-weight: bold;
      }
    }

</style>
  