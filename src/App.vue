<template>
  <homePage />
</template>

<script>
import homePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    homePage,
  },
};
</script>

<style>
:root {
  --lightTheme: #fffafa;
  --darkTheme: #0b0324;
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
  background-color: var( --lightTheme);
  width: 100%;
  height: 100%;
}
</style>
