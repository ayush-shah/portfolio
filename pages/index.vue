<template>
  <div class="landing-page light">
    <div class="avatar"></div>
    <h1 class="name">Ayush Shah</h1>
    <div class="info">
      <div class="data">
        <h5>Email</h5>
        <a href="email:ayush02shah12@gmail.com">
          <h6>ayush02shah12@gmail.com</h6>
        </a>
      </div>
      <div class="data">
        <h5>Number</h5>
        <a href="tel:7977456315">
          <h6>7977456315</h6>
        </a>
      </div>
      <div class="data">
        <h5>Github</h5>
        <a href="#">
          <h6>Click Here</h6>
        </a>
      </div>
      <div class="data">
        <h5>Linkedin</h5>
        <a href="#">
          <h6>Click Here</h6>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>
.dark {
  background-color: #000;
  color: #fff;
}
.light {
  background-color: #fff;
  color: #000;
}
.dark.colormode i {
  color: white;
}
.colormode {
  z-index: 1;
  position: absolute;
  top: 1em;
  right: 1em;
  padding: 5px;
}

.avatar {
  display: block;
  margin: 5% auto 2.5% auto;
  background: url(/images/me.svg);
  width: 10vw;
  background-size: cover;
  border: 1px solid;
  border-radius: 50%;
  height: 10vw;
}

.info {
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  width: 80%;
}
.data {
  flex: 1 0 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #0001;
}
.data:last-child {
  margin-bottom: 2.5%;
}
.data a {
  text-decoration: underline;
  color: #000a;
}

.data a:hover {
  color: #000;
}
/* Media */
@media screen and (max-width: 768px) {
  .avatar {
    width: 15vh;
    height: 15vh;
  }
}
</style>
