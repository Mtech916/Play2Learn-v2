<template>
  <main id="home-view">
    <div class="container-fluid">
      <div class="text-center">
        <h1 class="text--lg">Happy Clients Say...</h1>
          <blockquote class="quote">
            <q>Yippee-ki-yay, this cowboy just played Anagram Hunt.<br>
              It's the best game ever invented!</q>
            <p class="q-name">John McClane</p>
          </blockquote>
          <blockquote class="quote" style="display: none;">
            <q>It was more fun playing your games than filming all my awesome movies!</q>
            <p class="q-name">John Wick</p>
          </blockquote>
          <blockquote class="quote" style="display: none;">
            <q>Play2Learn called me and asked, Want to play a game?<br>I responded: Joshua is that you?<br>Computer: No, its Math Facts Practice...Dun dun duuun!</q>
            <p class="q-name">David Lightman</p>
          </blockquote>
      </div>

      <div class="d-flex flex-column flex-md-row gap-3">
        <div>
          <h2 class="title--sm">Anagram Hunt</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus in quae id omnis cumque accusamus perspiciatis corrupti quo ducimus repellat quibusdam molestiae, quasi tempora illum modi eveniet! Hic dolores cum exercitationem voluptatibus laborum perferendis eius facilis repellat fugiat sit soluta laudantium tenetur sunt ratione, ut nesciunt qui. Debitis, commodi.</p>
            <div class="d-flex justify-content-end">
              <router-link to="/anagram-hunt" class="btn btn--line">Play</router-link>
            </div>
        </div>
        <div>
          <h2 class="title--sm">Math Facts Practice</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus in quae id omnis cumque accusamus perspiciatis corrupti quo ducimus repellat quibusdam molestiae, quasi tempora illum modi eveniet! Hic dolores cum exercitationem voluptatibus laborum perferendis eius facilis repellat fugiat sit soluta laudantium tenetur sunt ratione, ut nesciunt qui. Debitis, commodi.</p>
          <div class="d-flex justify-content-end">
            <router-link to="/math-facts" class="btn btn--line">Play</router-link>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
  export default {
    name: 'HomeView'
  }
</script>

<style scoped>
#home-view {
  /* padding-bottom: 100px; */
}

.btn--line {
  color: var(--primary);
  padding: 12px;
  box-shadow: 1px 0 6px 3px var(--quotes);
  border-radius: 3px;
}

.btn--line::after {
  content: "";
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid var(--gray-light);
  height: 4px;
  width: 100%;
}

@media (min-width: 761px) {
  #home-view {
    /* height: 100vh; */
  }
}

@media (max-width: 760px) {
  #home-view {
    margin-bottom: 70px;
  }
}

</style>