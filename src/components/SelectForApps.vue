<template>
  <div class="v-select">
    <div
      class="select-container"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      <p class="selected-option">
        {{ selectedOption }}
      </p>
      <div class="arrow"></div>
    </div>
    <div class="options" v-if="areOptionsVisible">
      <p
        class="option"
        v-for="option in options"
        :key="option.id"
        @click="selectOption(option)"
      >
        {{ option.title }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "select-options",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selectedOption: {
      type: String,
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
  },
};
</script>
<style>
.v-select {
  width: 300px;
  position: relative;
  height: 36px;
  background: var(--bacground-color-form);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--text-color);
  cursor: pointer;
  margin: 0 auto;
}
.select-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
}
.arrow {
  width: 8px;
  height: 7px;
  border-top: 1px solid var(--text-color);
  border-right: 1px solid var(--text-color);
  transform: rotate(135deg);
  margin-right: 35px;
}
.selected-option {
  width: 100%;
}
.options {
  position: absolute;
  top: 40px;
  background-color: var(--bacground-color-form);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 121.49px;
  z-index: 100;
  text-align: center;
  width: 300px;
}
.option {
  line-height: 26px;
}
.option:hover {
  background: var(--border-color);
  color: var( --text-coloe-primary);
  transition-duration: 0.7s;
}
@media (max-width: 768px) {
  .v-select {
    width: 90%;
    height: 30px;
  }
  .options {
    width: 100%;
  }
  .option {
    line-height: 26px;
    font-size: 12px;
  }
  .select-container {
    width: 90%;
  }
}
</style>