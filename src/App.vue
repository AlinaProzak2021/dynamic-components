<template>
  <div class="application" :class="[currentTheme, this.selectedFont]">
    <HomePage />
  </div>
  <ThemeProvider />
</template>
<script>
import { mapState } from "vuex";
import HomePage from "./components/HomePage.vue";
import ThemeProvider from "./components/ThemeProvider.vue";
export default {
  name: "App",
  components: {
    HomePage,
    ThemeProvider,
  },
  computed: {
    ...mapState(["currentTheme", "selectedFont"]),
  },
};
</script>

<style>
:root {
  --background-color-left-app: white;
  --background-color-right-app: white;
  --color-text-left-app: black;
  --color-text-title-right-app: black;
  --background-color-right-app-element: white;
  --background-color-left-app-element: white;
  --border-color-left-app: black;
  --border-color-right-app: black;
  --text-color-error-message: red;
  --background-color-hover: blue;
  --text-color-button: black;
  --transition-sec: 0.3s;
  --transform-scale: 1.2;
  --transform-rotate: 45deg;
  --negative-transform-rotate: -45deg;
  --font-family: "Montserrat", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  font-family: var(--font-family);
}
html,
body {
  width: 100%;
  /* <!-- Abba height adaptive --> */
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
.application {
  width: 100%;
  height: 100%;
}
</style>
