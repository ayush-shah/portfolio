export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap", rel: "stylesheet"
      },
      { rel: "icon", type: "image/x-icon", href: "favicon.ico" }
    ]
  },
   router: {
    base: '/portfolio/'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#000',
    height: '10px',
    throttle: 100
  },
  /*
   ** Global CSS
   */
  css: [{ src: "@/assets/css/main.css", rel: "stylesheet" }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
};
