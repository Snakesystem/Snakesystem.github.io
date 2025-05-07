<script lang="ts">
  import { onMount } from 'svelte';
  import skillsData from '../portfolio-data.json';
  import { TabContent, TabPane } from '@sveltestrap/sveltestrap';

  const categories = ['programming', 'tech-stack', 'others'];

  onMount(() => {
    // inisialisasi jika perlu
  });
</script>

<section id="skills" class="skills section">
  <div class="container section-title" data-aos="fade-up">
    <h2>Skills</h2>
    <p>Deskripsi skills di sini...</p>
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
                      {skill.title}
                      <span class="card-text ms-3"><small class="text-muted">({skill.updated_at})</small></span>
                    </h5>
                    <p class="card-text text-muted" style="font-style: italic;">
                      <small>{skill.description}</small>
                    </p>
                    <a href={skill.url} target="_blank" class="text-decoration-none" style="font-style: italic;">Read More</a>
                    <div class="card-text"><small class="text-muted">Skill Level: <strong>{skill.progress}</strong>%</small></div>
                  </div>
                  <div class="col-md-2 d-flex align-items-center">
                    <img class="card-img-top" src={skill.image} alt={skill.title} />
                  </div>
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
  
<style>
  .sticky-cards-section {
    width: 90%;
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
    
    .card.linkedin-post {
        padding: 10px;
        border-left: 4px solid #0077b5;
        border-right: 4px solid #0077b5;
        border-top: 1px solid #0077b5;
        background-color: #f9fcff;
        /* font-style: italic; */
    }

    .card.linkedin-post a {
        color: #0077b5;
        text-decoration: none;
        font-weight: bold;
    }

    .card.linkedin-post a:hover {
        text-decoration: underline;
    }

  </style>
  