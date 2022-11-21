<template>
  <div class="start-left-app">
    <img
      @click="setLeftComponentName(dynamicLeftComponent)"
      class="left-app-img"
      src="../../public/resources/startLeftApp.png"
      alt=""
    />
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "start-left-app",
  computed: {
    ...mapState(["dynamicLeftComponent"]),
  },
  methods: {
    ...mapMutations(["setLeftComponentName"]),
  },
};
</script>
<style>
.start-left-app {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.start-left-app:hover {
  outline: 2px solid var(--background-color-hover);
  transition: 0;
  position: relative;
  z-index: 10;
}
.left-app-img {
  width: 200px;
  height: 200px;
  transition: var(--transition-sec);
}
.left-app-img:hover {
  transform: scale(var(--transform-scale));
}
@media (max-width: 1024px) {
  .left-app-img {
    width: 100px;
    height: 100px;
  }
}
</style>