<script lang="ts">
  import { appRoutes } from "../app/app";
  import Footer from "./layouts/Footer.svelte";
  import Contact from "./pages/Contact.svelte";
  import Home from "./pages/Home.svelte";
  import Notfound from "./pages/Notfound.svelte";
  import { Route, Router } from "svelte-routing";
  import Project from "./pages/Project.svelte";
  import Experience from "./pages/Experience.svelte";
  import Skill from "./pages/Skill.svelte";
  import Header from "./layouts/Header.svelte";
  import About from "./pages/About.svelte";
  
</script>

<Router>
  <main class="main-page">
    <Header/>
    <Route path={appRoutes.ABOUT}>
      <About />
    </Route>
    <!-- Not Found Page -->
    <Route path="*">
      <Notfound />
    </Route>
    <div class="slides">
      <Route path={appRoutes.HOME}>
        <Home />
      </Route>
      <Route path={appRoutes.CONTACT}>
        <Contact />
      </Route>
      <Route path={appRoutes.PROJECT}>
        <Project />
      </Route>
      <Route path={appRoutes.EXPERIENCE}>
        <Experience />
      </Route>
      <Route path={appRoutes.SKILLS}>
        <Skill />
      </Route>
    </div>
    <Footer />
  </main>
</Router>