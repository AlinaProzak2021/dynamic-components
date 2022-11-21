<template>
  <!-- Abba -->
  <div class="back-to-start-app" @click="backToApp(componentName)">
    <img class="back-img" src="../../public/resources/back.png" alt="" />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "back-button-left-app",
  props: {
    backToApp: Function
  },
  methods: {
    ...mapMutations(["setLeftComponentName"]),
  },
};
</script>
<style>
.back-to-start-app {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.back-to-start-app:hover {
  transform: scale(var(--transform-scale));
}
.back-img {
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.back-img:hover {
  transform: scale(var(--transform-scale));
}
</style>