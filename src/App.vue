<template>
  <div id="app" :class="[currentTheme]">
    <Home />
  </div>
  <ThemeProvider />
</template>
<script>
import { mapState } from "vuex";
import Home from "./components/HomePage.vue";
import ThemeProvider from "./components/ThemeProvider.vue";
export default {
  name: "App",
  components: {
    Home,
    ThemeProvider,
  },
  computed: {
    ...mapState(["currentTheme"]),
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
  --transition-sec: 1s;
  --transform-scale: 1;
  --text-color-error-message: red;
  --background-color-hover: blue;
  --text-color-button: black;
}

* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
