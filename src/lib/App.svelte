<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import Header from "./layouts/Header.svelte";
  import Home from "./pages/Home.svelte";
  import Experience from "./pages/Experience.svelte";
  import Skill from "./pages/Skill.svelte";
  import Project from "./pages/Project.svelte";
  import Contact from "./pages/Contact.svelte";
  import {Router, Route} from "svelte-routing";
  import Notfound from "./pages/Notfound.svelte";
  
  const currSlide = writable(0);
  let slides: HTMLElement | null = null;
  let slideElements: NodeListOf<HTMLElement>;
  
  const pages = ["/", "/experience", "/skill", "/project", "/contact"];
  
  function updateSlidePosition(slideIndex: any) {
      if (!slides) return;
      const displacement = window.innerWidth * slideIndex;
      slides.style.transform = `translateX(-${displacement}px)`;
  }
   
  onMount(() => {
      slides = document.querySelector(".slides");
      slideElements = document.querySelectorAll(".slide");
  
      slideElements.forEach((slide) => {
          slide.style.transform = "translateX(100%)";
          setTimeout(() => {
              slide.style.transition = "transform 0.3s ease-out";
              slide.style.transform = "translateX(0)";
          }, 300);
      });
  
      window.addEventListener("resize", updateSlidePosition);
      document.body.addEventListener("wheel", handleMouseWheel);
  });
  
  function showSlide(index: number) {
      currSlide.set(index);
      updateSlidePosition(index);
      window.history.pushState({}, "", pages[index]); // Update URL tanpa reload
  }
  
  function handleMouseWheel(e: WheelEvent) {
      showSlide(e.deltaY >= 0 ? Math.min($currSlide + 1, pages.length - 1) : Math.max($currSlide - 1, 0));
      e.preventDefault();
  }
  </script>
  
  <div class="slides">
      {#each pages as page, index}
          <div class="slide {'slide-' + (index+1)}">
              {#if page === '/'}
                  <Home />
              {:else if page === '/experience'}
                  <Experience/>
              {:else if page === '/skill'}
                  <Skill/>
              {:else if page === '/project'}
                  <Project/>
              {:else if page === '/contact'}
                  <Contact/>
              {/if}
          </div>
      {/each}
  </div>

  <Router>
      <Route path="/">
          <Home />
      </Route>
      <Route path="/experience">
          <Experience/>
      </Route>
      <Route path="/skill">
          <Skill/>
      </Route>
      <Route path="/project">
          <Project/>
      </Route>
      <Route path="/contact">
          <Contact/>
      </Route>
      <Route path="*">
          <Notfound />
      </Route>
  </Router>
  <Header showSlide={(index: number) => { showSlide(index)}}/>

  <style>
      .slide-1 {
        background: url("/img/first_bg.jpg");
      }

      .slide-2 {
        background: url("/img/second_bg.jpg");
      }

      .slide-3 {
        background: url("/img/third_bg.jpg");
      }

      .slide-4 {
        background: url("/img/fourth_bg.jpg");
      }

      .slide-5 {
        background: url("/img/fifth_bg.jpg");
      }
  </style>