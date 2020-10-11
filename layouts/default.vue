<template >
  <div>
    <video autoplay muted loop id="bgvideo">
      <source src="background2.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <Navbar />
    <div class="card">
      <nuxt />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";

export default Vue.extend({
  components: { Navbar },
});
</script>
<style scoped>
.card {
  width: 50%;
  height: 85%;
  overflow: auto;
  background: white;
  display: block;
  top: 7.5%;
  overflow: auto;
  left: 25%;
  position: absolute;
  text-align: center;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
#bgvideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
@media screen and (max-width: 768px) {
  .card {
    width: 90%;
    left: 5%;
    top: 5%;
    background: rgba(255, 255, 255, 0.98);
    transform: unset;
    height: 80%;
    border-radius: 10px;
  }
}
</style>
