<template>
  <div class="navcard">
    <ul>
      <li>
        <nuxt-link to="/" class="active">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21 8.77217L14.0208 1.79299C12.8492 0.621414 10.9497 0.621413 9.77817 1.79299L3 8.57116V23.0858H10V17.0858C10 15.9812 10.8954 15.0858 12 15.0858C13.1046 15.0858 14 15.9812 14 17.0858V23.0858H21V8.77217ZM11.1924 3.2072L5 9.39959V21.0858H8V17.0858C8 14.8767 9.79086 13.0858 12 13.0858C14.2091 13.0858 16 14.8767 16 17.0858V21.0858H19V9.6006L12.6066 3.2072C12.2161 2.81668 11.5829 2.81668 11.1924 3.2072Z"
              fill="currentColor"
            />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 18H17V16H7V18Z" fill="currentColor" />
          <path d="M17 14H7V12H17V14Z" fill="currentColor" />
          <path d="M7 10H11V8H7V10Z" fill="currentColor" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
            fill="currentColor"
          />
        </svg>
      </li>
      <li>
        <nuxt-link to="/gallery">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 7C5.34315 7 4 8.34315 4 10C4 11.6569 5.34315 13 7 13C8.65685 13 10 11.6569 10 10C10 8.34315 8.65685 7 7 7ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H7.31374L14.1924 12.1214C15.364 10.9498 17.2635 10.9498 18.435 12.1214L22 15.6863V6C22 5.44772 21.5523 5 21 5ZM21 19H10.1422L15.6066 13.5356C15.9971 13.145 16.6303 13.145 17.0208 13.5356L21.907 18.4217C21.7479 18.7633 21.4016 19 21 19Z"
              fill="currentColor"
            />
          </svg>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
.navcard {
  left: 20%;
  position: absolute;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  top: 30%;
  width: 5%;
  height: 40%;
  align-content: center;
  z-index: 5;
  box-shadow: -7px 0px 15px #0005;
}

.navcard ul {
  margin: 0;
  padding: 0;
  justify-content: space-around;
  height: 100%;
  position: relative;
  display: flex;
  align-content: center;
  cursor: pointer;
  flex-flow: column wrap;
}
.navcard svg {
  color: #0005;
}
.navcard .active svg {
  color: #000;
}
.navcard ul li:hover svg {
  color: #000c;
}
@media screen and (max-width: 768px) {
  .navcard{
    bottom: 0;
    top: unset;
    width: 100%;
    height: 10vh;
    left: unset;
    box-shadow: none;
  }
  .navcard ul{
    flex-flow: row wrap;
  }
}
</style>