<template >
  <div>
    <div class="video" v-if="display">
      <video autoplay muted loop id="bgvideo" v-if="width > 768">
        <source src="/background2.mp4" type="video/mp4" />Your browser does not support HTML5 video.
      </video>
    </div>
    <div v-else></div>
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
  data() {
    return { width: screen.width, display: true };
  },
  components: { Navbar, Colormode, RandomSVG },
  mounted() {
    // setTimeout(() => {
    // this.display = false;
    // }, 8000);
  }
});
</script>
<style scoped>
.card {
  width: 50%;
  height: 80%;
  overflow: auto;
  background: white;
  display: block;
  top: 50%;
  transform: translate(0%, -50%);
  overflow: auto;
  left: 25%;
  position: absolute;
  text-align: center;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
}
#bgvideo {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  filter: grayscale(0);
  opacity: 1;
  animation: fade 8s linear both;
}
@keyframes fade {
  0% {
    opacity: 1;
    filter: grayscale(0);
  }
  to {
    opacity: 1;
    filter: grayscale(1);
  }
}
@media screen and (max-width: 768px) {
  .card {
    width: 100%;
    left: 0%;
    top: 0%;
    transform: unset;
    height: 90%;
    box-shadow: none;
    border-radius: unset;
  }
}
</style>
