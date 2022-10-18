<template>
  <div
    class="back-to-start-app"
    @click="setLeftComponentName(componentNames.playleftApp)"
  >
    <img class="back__img" src="../../resources/back.png" alt="" />
  </div>
  <h1>2</h1>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["setLeftComponentName"]),
  },
  computed: {
    ...mapState(["componentNames"]),
  },
};
</script>
<style>
h1 {
  font-size: 96px;
}
</style>