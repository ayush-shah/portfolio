<template >
  <div>
    <RandomSVG />
    <!-- <Colormode /> -->
    <Navbar />
    <div class="card">
      <nuxt />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
import Colormode from "@/components/Colormode.vue";
import RandomSVG from "@/components/RandomSVG.vue";

export default Vue.extend({
  components: { Navbar, Colormode ,RandomSVG}
});
</script>
<style scoped>
.card {
  width: 50%;
  height: 80%;
  display: block;
  top: 10%;
  overflow: auto;
  left: 25%;
  position: absolute;
  text-align: center;
  border-radius: 30px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
}
@media screen and (max-width: 768px) {
  .card {
    width: 100%;
    left: 0%;
    top: 0%;
    height: 90%;
    box-shadow: none;
  }
}
</style>
