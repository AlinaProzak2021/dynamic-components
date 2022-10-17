<template>
  <div id="app"><Home /></div>
</template>

<script>
import Home from "./components/HomePage.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
:root {
  --background-color: #f0f8ff;
  --border-color: #8a2be2;
  --background-color-hover: dodgerblue;
  --text-color-error: #eb4034;
  --text-color-button: white;
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
