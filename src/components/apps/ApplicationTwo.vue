<template>
  <div class="custom-select-application">
    <BackToApp :backToApp="backToStartLeftApp" />
    <div class="custom-select">
      <!-- Abba -->
      <div
        class="custom-select-selected"
        @click="isActiveDropdown = !isActiveDropdown"
      >
        <div class="select-item-container current-item">
          <div class="select-item-img current-img">
            <img :src="currentItem.optionImg" />
          </div>
          <div class="select-item-text">
            {{ currentItem.optionText }}
          </div>
        </div>
        <div
          class="select-item-arrow"
          :class="{ 'select-item-arrow-reverse': isActiveDropdown }"
        >
          <svg
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z"
              fill="#353535"
            />
          </svg>
        </div>
      </div>
      <div class="dropdown-container" v-if="isActiveDropdown">
        <div
          @click="selectOption(item)"
          class="select-item-container"
          v-for="(item, index) in selectOptionsTwoApp"
          :key="index"
        >
          <div class="select-item-img">
            <img :src="item.optionImg" />
          </div>
          <div class="select-item-text">
            <p>{{ item.optionText }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import BackToApp from "../BackButton.vue";
export default {
  components: {
    BackToApp,
  },
  methods: {
    backToStartLeftApp() {
      this.setLeftComponentName(this.componentNames.playleftApp);
    },
    ...mapMutations(["setLeftComponentName"]),
    selectOption(selectItem) {
      this.currentItem = selectItem;
      this.isActiveDropdown = false;
    },
  },
  computed: {
    ...mapState(["componentNames", "selectOptionsTwoApp"]),
  },
  data() {
    return {
      isActiveDropdown: false,
      currentItem: {
        optionText: "Выбор",
        optionImg: require("../../../public/resources/86am.jpg"),
      },
    };
  },
};
</script>
<style scoped>
.custom-select-application {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.custom-select {
  width: 200px;
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: var(--background-color-left-app-element);
}
.custom-select-selected {
  width: 176px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 16px;
}

.select-item-img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.current-img {
  margin-left: 0;
}
.select-item-text {
  margin-left: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #353535;
  font-family: var(--font-family);
  cursor: pointer;
}
.select-item-arrow-reverse {
  transform: rotate(180deg);
  transition: transform 0.2s;
}
.select-item-arrow {
  transition: transform 0.2s;
}

.dropdown-container {
  background: var(--background-color-left-app-element);
  position: absolute;
  border-radius: 5px;
  width: 100%;
  left: 0;
  right: 0;
  top: 60px;
}
.current-item {
  width: 176px;
}
.select-item-container {
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
}
.select-item-container:hover {
  outline: 1px solid var(--border-color-left-app);
}
.current-item:hover {
  outline: none;
}
</style>