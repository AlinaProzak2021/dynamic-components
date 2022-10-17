<template>
  <div><formAdd /></div>
</template>

<script>
import formAdd from "./components/FormAddCard.vue";
export default {
  name: "App",
  components: {
    formAdd,
  },
};
</script>

<style>
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
