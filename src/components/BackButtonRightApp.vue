<template>
<!-- Abba -->
  <div class="back-to-start-app" @click="setRightComponentName(nameComponent)">
    <img class="back-img" src="../../resources/back.png" alt="" />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "back-button-rigth-app",
  props: {
    nameComponent: {
      type: String,
    },
  },
  methods: {
    ...mapMutations(["setRightComponentName"]),
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