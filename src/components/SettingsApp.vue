<template>
  <div class="configuration-container">
    <div
      class="back-to-start-app"
      @click="setRightComponentName(componentNames.configurationApp)"
    >
      <img class="back-img" src="../../resources/back.png" alt="" />
    </div>
    <div class="select-settings">
      <h3 class="configuration-title">Вы можете выбрать тему и приложение</h3>
      <section class="configuration-select">
        <p class="configuration-subtitle">Выберите цвет фона</p>
        <selectOption
          :options="optionsThemes"
          :selectedOption="selectedOptionTheme"
          @select="changeAppsTheme"
        />
      </section>
      <section class="configuration-select">
        <p class="configuration-subtitle">Выберите приложение</p>
        <selectOption
          :options="optionsApps"
          :selectedOption="selectedOptionApp"
          @select="changeApp"
        />
      </section>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import optionsThemes from "../../dataset.js";
import optionsApps from "../../dataset.js";
import selectOption from "./SelectForApps.vue";
export default {
  components: {
    selectOption,
  },
  data() {
    return {
      optionsThemes: optionsThemes.optionsThemes,
      optionsApps: optionsApps.optionsApps,
      selectedOptionTheme: "Тема 1",
      selectedOptionApp: "Приложение 1",
      selectedOptionAppValue: "",
      selectedOptionThemeValue: "",
    };
  },
  computed: {
    ...mapState(["componentNames", "selectedTheme", "themes"]),
  },
  watch: {
    selectedOptionAppValue() {
      if (this.selectedOptionAppValue == 0) {
        this.setDynamicLeftComponent(this.componentNames.oneApplication);
      } else {
        this.setDynamicLeftComponent(this.componentNames.twoApplication);
      }
    },
    selectedOptionThemeValue() {
      if (this.selectedOptionThemeValue == 0) {
        this.setSelectedTheme(this.themes.defaultTheme);
      } else {
        this.setSelectedTheme(this.themes.oppositeTheme);
      }
    },
  },
  methods: {
    ...mapMutations([
      "setDynamicLeftComponent",
      "setRightComponentName",
      "setSelectedTheme",
    ]),
    changeAppsTheme(option) {
      this.selectedOptionTheme = option.title;
      this.selectedOptionThemeValue = option.id;
    },
    changeApp(option) {
      this.selectedOptionApp = option.title;
      this.selectedOptionAppValue = option.id;
    },
  },
};
</script>
<style scoped>
.configuration-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
}
.select-settings {
  width: 400px;
  display: flex;
  flex-direction: column;
}
.configuration-title {
  margin-top: 30px;
  font-size: 18px;
  letter-spacing: 0.1em;
  margin-bottom: 30px;
  text-align: center;
}
.configuration-select {
  margin: 0 auto;
  width: 300px;
  margin-bottom: 60px;
}
.configuration-subtitle {
  text-align: center;
  margin-bottom: 15px;
}
@media (max-width: 1024px) {
  .select-settings {
    width: 100%;
    background: none;
  }
  .configuration-title {
    font-size: 14px;
  }
  .configuration-subtitle {
    font-size: 12px;
  }
  .configuration-select {
    width: 100%;
    margin-bottom: 40px;
  }
}
</style>