<template>
  <div class="experience">
    <h3>Experience</h3>
    <div class="exp-tree">
      <div class="exp-stem" data-stem="30">
        <div class="comp-title">Gracenote</div>
        <div class="comp-post">Software Engineer</div>
        <div class="comp-duration">September 2020 - Present</div>
      </div>
      <div class="exp-stem" data-stem="30">
        <div class="comp-title">Deuex Solutions Pvt. Ltd.</div>
        <div class="comp-post">Frontend Developer</div>
        <div class="comp-duration">April 2020 - June 2020</div>
      </div>
      <div class="exp-stem" data-stem="30">
        <div class="comp-title">Deuex Solutions Pvt. Ltd.</div>
        <div class="comp-post">Intern</div>
        <div class="comp-duration">June 2019 - July 2019</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
};
</script>

<style scoped>
.exp-tree {
  display: flex;
  flex-flow: column nowrap;
  width: 80%;
  margin: auto;
  margin-bottom: 5%;
  position: relative;
}

.exp-stem {
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  position: relative;
  width: 100%;
}

.comp-title {
  font-size: 12px;
  font-weight: 800;
}

.comp-post {
  font-size: 11px;
  font-weight: 600;
}

.comp-duration {
  font-size: 11px;
  font-weight: 600;
}

.exp-stem::before {
  content: "";
  position: absolute;
  right: 10%;
  top: 0%;
  height: 100%;
  width: 10px;
  background: rgb(26 66 43 / 44%);
}
.exp-stem::after {
  content: "";
  position: absolute;
  right: calc(10% - 5px);
  top: calc(50% - 10px);
  height: 20px;
  width: 20px;
  background: rgb(26, 66, 43);
  border-radius: 50%;
}
.exp-stem:first-child::before {
  border-radius: 10px 10px 0 0;
}
.exp-stem[data-stem="100"] {
  padding: calc(5% + 100px) 1px;
}
.exp-stem[data-stem="80"] {
  padding: calc(5% + 80px) 1px;
}
.exp-stem[data-stem="50"] {
  padding: calc(5% + 50px) 1px;
}

.exp-stem[data-stem="10"] {
  padding: calc(5% + 10px) 1px;
}
.exp-stem[data-stem="30"] {
  padding: calc(5% + 30px) 1px;
}

.exp-stem:last-child::before {
  border-radius: 0 0 10px 10px;
}
</style>