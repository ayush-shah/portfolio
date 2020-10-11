<template>
  <div class="skills">
    <h3>Skills</h3>
    <div class="skill-page">
      <div class="skill-single">
        <img src="images/Projects/html.png" alt="html" />
      </div>
      <div class="skill-single">
        <img src="images/Projects/css.png" alt="css" />
      </div>
      <div class="skill-single">
        <img src="images/Projects/php.svg" alt="php" />
      </div>
      <div class="skill-single">
        <img src="images/Projects/js.png" alt="html" />
      </div>
      <div class="skill-single">
        <img src="images/Projects/react.png" alt="html" />
      </div>
      <div class="skill-single">
        <img src="images/Projects/vue.png" alt="html" />
      </div>
      <div class="skill-single">
        <img src="images/Projects/node.png" alt="html" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.skill-single {
  display: flex;
  flex-flow: row wrap;
  flex: 1 0 33.33%;
  justify-content: center;
  margin: 2.5%;
}
.skill-single img {
  width: 75px;
  height: 75px;
  -o-object-fit: contain;
  object-fit: contain;
}
.skill-page {
  flex-flow: row wrap;
  display: flex;
  justify-content: space-around;
}
</style>