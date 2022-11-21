<template>
  <div class="configuration-container">
    <!-- Abba -->
    <BackToApp :backToApp="backToStartSettings" />
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
      <section class="configuration-select">
        <p class="configuration-subtitle">Выберите шрифт</p>
        <select
          name="select"
          v-model="selectOptionFont"
          @change="changeAppFont"
        >
          <option
            selected
            :value="font"
            v-for="(font, index) in fonts"
            :key="index"
          >
            {{ font }}
          </option>
        </select>
      </section>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import optionsThemes from "../../dataset.json";
import optionsApps from "../../dataset.json";
import selectOption from "./SelectForApps.vue";
import BackToApp from "./BackButton.vue";
import appFonts from "../../json resources/fonts.json";
export default {
  components: {
    selectOption,
    BackToApp,
  },
  data() {
    return {
      optionsThemes: optionsThemes.optionsThemes,
      optionsApps: optionsApps.optionsApps,
      selectedOptionTheme: "Тема 1",
      selectedOptionApp: "Приложение 1",
      selectedOptionAppValue: "",
      selectedOptionThemeValue: "",
      selectOptionFont: appFonts.DefultFont,
    };
  },
  computed: {
    ...mapState(["componentNames", "selectedTheme", "themes", "fonts"]),
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
      
    },
  },
  methods: {
    ...mapMutations([
      "setDynamicLeftComponent",
      "setRightComponentName",
      "setSelectedTheme",
      "setSelectedFont",
    ]),
    backToStartSettings(){
      this.setRightComponentName(this.componentNames.configurationApp)
    },
    changeAppsTheme(option) {
      this.selectedOptionTheme = option.title;
      this.selectedOptionThemeValue = option.id;
    },
    changeApp(option) {
      this.selectedOptionApp = option.title;
      this.selectedOptionAppValue = option.id;
    },
    changeAppFont() {
      this.setSelectedFont(this.selectOptionFont);
    },
  },
};
</script>
<style scoped>
.configuration-container {
  height: 100%;
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
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.configuration-subtitle {
  text-align: center;
  margin-bottom: 15px;
}
select {
  width: 300px;
  height: 36px;
  background: var(--background-color-right-app-element);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--color-text-right-app);
  cursor: pointer;
  margin: 0 auto;
  outline: none;
  border: none;
  padding-left: 15px;
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