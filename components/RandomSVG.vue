<template>
  <div class="random-container">
    <span class="random">
      <i class="gg-cloud"></i>
    </span>
    <span class="random">
      <i class="gg-music-note"></i>
    </span>
    <span class="random">
      <i class="gg-music"></i>
    </span>
    <span class="random">
      <i class="gg-comment"></i>
    </span>
    <span class="random">
      <i class="gg-data"></i>
    </span>
    <span class="random">
      <i class="gg-games"></i>
    </span>
    <span class="random">
      <i class="gg-media-podcast"></i>
    </span>
    <span class="random">
      <i class="gg-piano"></i>
    </span>
    <span class="random">
      <i class="gg-ratio"></i>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "RandomSVG",
  mounted: () => {
    setInterval((i: number, icons: HTMLCollectionOf<Element>) => {
      icons = document.getElementsByClassName("random");
      for (i = 0; i < icons.length; i++) {
        icons[i].children[0].setAttribute(
          "style",
          `left:${Math.ceil(Math.random() * 98)}%;top:${Math.ceil(
            Math.random() * 98
          )}% `
        );
      }
    }, 3000);
  }
});
</script>
<style scoped>
.random-container {
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
}
.random {
  position: absolute;
  width: 100%;
  height: 100%;
}
.random i {
  left:-50px;
  top:-50px;
  opacity: 0;
  animation: show 3s infinite linear both;
}
@keyframes show {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
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
.gg-comment {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 20px;
  height: 16px;
  border: 2px solid;
  border-bottom: 0;
  box-shadow: -6px 8px 0 -6px, 6px 8px 0 -6px;
}

.gg-comment::after,
.gg-comment::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 8px;
}

.gg-comment::before {
  border: 2px solid;
  border-top-color: transparent;
  border-bottom-left-radius: 20px;
  right: 4px;
  bottom: -6px;
  height: 6px;
}

.gg-comment::after {
  height: 2px;
  background: currentColor;
  box-shadow: 0 4px 0 0;
  left: 4px;
  top: 4px;
}
.gg-data {
  transform: scale(var(--ggs, 1));
}

.gg-data,
.gg-data::after,
.gg-data::before {
  box-sizing: border-box;
  position: relative;
  display: block;
  border: 2px solid;
  border-radius: 50%;
  width: 14px;
  height: 14px;
}

.gg-data::after,
.gg-data::before {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  top: 2px;
  left: 2px;
}

.gg-data::after {
  background: linear-gradient(to left, currentColor 8px, transparent 0)
    no-repeat bottom center/2px 8px;
  width: 22px;
  height: 22px;
  top: -6px;
  left: -6px;
}

.gg-data,
.gg-data::after {
  border-top-color: transparent;
  border-bottom-color: transparent;
}
.gg-games {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 24px;
  height: 12px;
  border: 3px solid transparent;
  border-left: 6px solid transparent;
  box-shadow: 0 0 0 2px, inset 2px 0 0;
  border-radius: 40px;
}

.gg-games::after,
.gg-games::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  height: 2px;
  background: currentColor;
}

.gg-games::before {
  left: -2px;
  width: 6px;
  top: 2px;
}

.gg-games::after {
  border-radius: 3px;
  width: 2px;
  box-shadow: 0 4px 0, -2px 2px 0, 2px 2px 0;
  top: 0;
  right: 2px;
}
.gg-media-podcast {
  transform: scale(var(--ggs, 1));
}

.gg-media-podcast,
.gg-media-podcast::after,
.gg-media-podcast::before {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 14px;
  height: 14px;
  border: 2px solid;
  border-bottom-color: transparent;
  border-radius: 50%;
}

.gg-media-podcast::after,
.gg-media-podcast::before {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  top: 2px;
  left: 2px;
}

.gg-media-podcast::after {
  width: 22px;
  height: 22px;
  top: -6px;
  left: -6px;
}
.gg-piano {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 23px;
  height: 18px;
  border: 2px solid;
  border-radius: 2px;
}

.gg-piano::after,
.gg-piano::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  height: 10px;
  background: currentColor;
  box-shadow: 5px 0 0, 10px 0 0;
}

.gg-piano::before {
  top: -2px;
  width: 3px;
  left: 3px;
}

.gg-piano::after {
  width: 1px;
  bottom: -2px;
  left: 4px;
}
.gg-ratio {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 24px;
  height: 20px;
  border: 2px solid;
  border-radius: 4px;
}

.gg-ratio::after,
.gg-ratio::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 6px;
  height: 6px;
}

.gg-ratio::before {
  border-bottom: 2px solid;
  border-right: 2px solid;
  top: 8px;
  left: 12px;
}

.gg-ratio::after {
  border-top: 2px solid;
  border-left: 2px solid;
  top: 2px;
  left: 2px;
}
</style>