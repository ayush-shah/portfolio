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
      <div class="items"></div>
    </div>
    <div class="carousel01"></div>
    <div class="carousel02"></div>
    <div class="carousel03"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: auto;
}
.items {
  position: relative;
  margin: 0 2.5%;
  flex: 1 0 45%;
  width: 49%;
  align-self: center;
}
.items img {
  width: 100%;
}
</style>