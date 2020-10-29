<template>
  <div class="navcard">
    <ul>
      <li>
        <nuxt-link to="/" class="active" title="About me">
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
        <nuxt-link to="/skills" class="inactive" title="Skills">
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
              d="M4 9C4 11.9611 5.60879 14.5465 8 15.9297V15.9999C8 18.2091 9.79086 19.9999 12 19.9999C14.2091 19.9999 16 18.2091 16 15.9999V15.9297C18.3912 14.5465 20 11.9611 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9ZM16 13.4722C17.2275 12.3736 18 10.777 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.777 6.7725 12.3736 8 13.4722L10 13.4713V16C10 17.1045 10.8954 17.9999 12 17.9999C13.1045 17.9999 14 17.1045 14 15.9999V13.4713L16 13.4722Z"
              fill="currentColor"
            />
            <path
              d="M10 21.0064V21C10.5883 21.3403 11.2714 21.5351 12 21.5351C12.7286 21.5351 13.4117 21.3403 14 21V21.0064C14 22.111 13.1046 23.0064 12 23.0064C10.8954 23.0064 10 22.111 10 21.0064Z"
              fill="currentColor"
            />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/experience" class="inactive" title="Experience">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 11H10V13H14V11Z" fill="currentColor" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
              fill="currentColor"
            />
          </svg>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/gallery" class="inactive" title="Gallery">
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
  name: "Navbar",
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
.navcard {
  background: white;
  left: calc(20% + 1px);
  position: absolute;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  top: 25%;
  width: 5%;
  height: 50%;
  align-content: center;
  z-index: 5;
}

.navcard ul {
  margin: 0;
  padding: 0;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column wrap;
}

.navcard .inactive svg {
  color: #0005;
  animation: glow 2s infinite linear both;
}
@keyframes glow {
  0% {
    color: #0005;
  }
  50% {
    color: #000;
  }
  100% {
    color: #0005;
  }
}
.navcard .active svg,
.navcard .active i {
  color: #000;
}
.navcard ul li:hover svg,
.navcard ul li:hover i {
  color: #000c;
}
li {
  flex: 1 0;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .navcard {
    bottom: 0;
    top: unset;
    width: 100%;
    height: 10vh;
    left: unset;
    border-radius: unset;
    border-top: 1px solid black;
  }
  .navcard ul {
    flex-flow: row wrap;
  }
}
</style>