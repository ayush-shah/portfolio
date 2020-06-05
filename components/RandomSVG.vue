<template>
  <div class="random-container">
    <!-- <i class="gg-cloud random"></i>
    <i class="gg-music-note random"></i>
    <i class="gg-music random"></i> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "RandomSVG",
  mounted(){
    //   setTimeout:Function
    // setTimeout((i:number) => {
    //     for(i = 0;i<document.getElementsByClassName('random').length;i++){
    //     }
    // }, 3000);
  }
})
</script>
<style scoped>
.random-container {
  position: absolute;
}
.random {
  position: absolute;
}
.gg-cloud {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 8px;
  height: 2px;
  background: currentColor;
  margin-bottom: -20px;
}

.gg-cloud::after,
.gg-cloud::before {
  content: "";
  display: block;
  position: absolute;
  border: 2px solid;
  box-sizing: border-box;
  bottom: 0;
}

.gg-cloud::before {
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  border-right: 0;
  left: -6px;
  width: 7px;
  height: 12px;
}

.gg-cloud::after {
  width: 16px;
  height: 16px;
  border-radius: 100px;
  border-left-color: transparent;
  right: -8px;
  transform: rotate(-45deg);
}
.gg-music-note {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 2px;
  height: 14px;
  background: currentColor;
}

.gg-music-note::after,
.gg-music-note::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  border: 2px solid;
}

.gg-music-note::before {
  bottom: -4px;
  width: 8px;
  height: 8px;
  left: -6px;
  border-radius: 10px;
}

.gg-music-note::after {
  width: 10px;
  height: 6px;
  top: -4px;
  left: 0;
  border-radius: 2px;
  transform: skewY(-15deg);
}
.gg-music,
.gg-music::after,
.gg-music::before {
  display: block;
  box-sizing: border-box;
  border: 2px solid;
}

.gg-music {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 0;
  margin-top: -4px;
  position: relative;
  transform: skewY(-15deg) scale(var(--ggs, 1));
  width: 14px;
  height: 16px;
}

.gg-music::after,
.gg-music::before {
  content: "";
  position: absolute;
  width: 7px;
  height: 7px;
  top: 9px;
  left: -7px;
  transform: skewY(15deg);
  border-radius: 10px;
}

.gg-music::after {
  left: 5px;
}
</style>