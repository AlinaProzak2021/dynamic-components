<template>
  <img
    @click="setLeftComponentName(componentNames.playleftApp)"
    class="back__img"
    src="../../resources/back.png"
    alt=""
  />
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