<template>
  <div class="start-right-app">
    <img
      class="right-app-img"
      @click="setRightComponentName(componentNames.settingsApplication)"
      src="../../resources/settings.png"
      alt=""
    />
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["componentNames"]),
  },
  methods: {
    ...mapMutations(["setRightComponentName"]),
  },
};
</script>
<style>
.start-right-app {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right-app-img {
  width: 130px;
  height: 130px;
  transition: var(--transition-sec);
}
.right-app-img:hover {
  transform: rotate(calc(var(--transform-rotate) * 6));
}
@media (max-width: 1024px) {
  .right-app-img {
    width: 70px;
    height: 70px;
  }
}
</style>