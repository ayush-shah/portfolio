<template>
  <div class="gallery">
    <h3>Gallery</h3>
    <div class="item">
      <div class="items">
        <div class="caption">Let's Play Housie</div>
        <img src="images/Projects/housie.webp" alt="project1" />
      </div>
      <div class="items">
        <div class="caption">Deuex Solutions Pvt. Ltd.</div>
        <img src="images/Projects/deuex.webp" alt="project2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item {
  display: flex;
  flex-flow: row wrap;
}

.items {
  display: flex;
  flex: 1 0 40%;
  flex-flow: column wrap;
  padding: 0 5%;
  justify-content: space-between;
}

.items img {
  width: 100%;
  margin: auto;
}

.caption {
  display: flex;
  align-self: center;
}
</style>