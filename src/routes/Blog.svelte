<script lang="ts">
    import { onMount } from 'svelte';
    import { blogs } from '../portfolio-data.json';
  
    // Inisialisasi card
    onMount(() => {
      document.querySelectorAll('.card');
    });
  </script>

<section id="blog" class="blog section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Catatan</h2>
      <p>Terkadang di waktu luang atau gabut saya, saya membuat catatan mengenai teknologi yang saya pelajari. Tujuannya adalah sebagai dokumentasi tentang apa yang saya pelajari dan bagaimana saya memahami teknologi tersebut. Serta sebagai pengingat di masa yang akan datang.</p>
    </div>
    <div class="container">
        <div class="sticky-cards-section" data-aos="fade-up" data-aos-delay="100">
            {#each blogs as blog, index}
                <div class="card card-{index + 1} linkedin-post" style="z-index: {index + 1};">
                  <div class="card-body">
                    <div class="row justify-content-between">
                        <div class="col-md-8">
                            <h5 class="card-title">{blog.title}</h5>
                            <p class="card-text">{blog.description}</p>
                            <a href={blog.url} target="_blank" class="text-decoration-none">Read More</a>
                            <p class="card-text"><small class="text-muted">{blog.updated_at}</small></p>
                        </div>
                        <div class="col-md-4">
                            <img class="card-img-top" src={blog.image} alt={blog.title} />
                        </div>
                    </div>
                  </div>
                </div>
            {/each}
        </div>
    </div>
</section>
  
<style>
    .card {
      position: -webkit-sticky; /* Untuk Safari */
      border: none;
      position: sticky;
      top: 20px; /* Setiap card akan sticky dengan jarak top */
      width: 70%;
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
      transform: scale(1.05);
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
        background-color: #f9fcff;
        font-style: italic;
    }

    .card.linkedin-post a {
        color: #0077b5;
        text-decoration: none;
        font-weight: bold;
    }

    .card.linkedin-post a:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {

      #blog .section-title {
        margin-bottom: -3rem;
      }

      #blog .section-title h2 {
        font-size: 1.6rem;
      }

      #blog .section-title p {
        font-size: 0.9rem;
      }

      .card {
        width: 100%;
      }

      .card-body p {
        font-size: 0.9rem;
        text-align: justify;
      }
    }
  </style>
  