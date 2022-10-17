<template>
  <div class="configuration-container">
    <img
      @click="setRightComponentName(componentNames.configurationApp)"
      class="back__img"
      src="../../resources/back.png"
      alt=""
    />
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
import selectOption from "./SelectForApps.vue";
export default {
  components: {
    selectOption,
  },
  data() {
    return {
      optionsThemes: [
        { id: 0, title: "Тема 1" },
        { id: 1, title: "Тема 2" },
      ],
      optionsApps: [
        {
          id: 0,
          title: "Приложение 1",
        },
        {
          id: 1,
          title: "Приложение 2",
        },
      ],
      selectedOptionTheme: "Тема 1",
      selectedOptionApp: "Приложение 1",
      selectedOptionAppValue: "",
      selectedOptionThemeValue: "",
    };
  },
  computed: {
    ...mapState(["componentNames", "theme2", "theme1"]),
  },
  watch: {
    selectedOptionAppValue() {
      if (this.selectedOptionAppValue == 0) {
        this.setDynamicLeftComponent(this.componentNames.oneApplication);
      } else {
        this.setDynamicLeftComponent(this.componentNames.twoApplication);
      }
    }
  },
  methods: {
    ...mapMutations([
      "setDynamicLeftComponent",
      "setRightComponentName",
      "setThemeTwo",
      "setThemeOne",
    ]),

    changeAppsTheme(option) {
      this.selectedOptionTheme = option.title;
      this.selectedOptionThemeValue = option.id;
      if (this.selectedOptionThemeValue === 1) {
        this.setThemeTwo();
      } else {
        this.setThemeOne();
      }
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