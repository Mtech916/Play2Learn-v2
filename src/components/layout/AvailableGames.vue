<template>
  <div class="d-flex flex-column flex-md-row gap-3">
        <div>
          <h2 class="title--sm">Anagram Hunt</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus in quae id omnis cumque accusamus perspiciatis corrupti quo ducimus repellat quibusdam molestiae, quasi tempora illum modi eveniet! Hic dolores cum exercitationem voluptatibus laborum perferendis eius facilis repellat fugiat sit soluta laudantium tenetur sunt ratione, ut nesciunt qui. Debitis, commodi.</p>
            <div class="d-flex justify-content-end">
              <router-link to="/login" class="btn btn--line rounded-3 text-uppercase">Play</router-link>
            </div>
        </div>
        <div>
          <h2 class="title--sm">Math Facts Practice</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus in quae id omnis cumque accusamus perspiciatis corrupti quo ducimus repellat quibusdam molestiae, quasi tempora illum modi eveniet! Hic dolores cum exercitationem voluptatibus laborum perferendis eius facilis repellat fugiat sit soluta laudantium tenetur sunt ratione, ut nesciunt qui. Debitis, commodi.</p>
          <div class="d-flex justify-content-end">
            <router-link to="/math-facts" class="btn btn--line rounded-3 text-uppercase">Preview</router-link>
          </div>
        </div>
      </div>
</template>

<script>
  export default {
    name: 'AvailableGames'
  }
</script>
