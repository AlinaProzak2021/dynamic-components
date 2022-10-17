<template>
  <main class="main-app">
    <div class="app-content">
      <section class="left-app">
        <component :is="currentLeftComponent"></component>
      </section>
      <section class="right-app">
        <component :is="currentRightComponent"></component>
      </section>
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";
import OneApplicationLeft from "./ApplicationOne.vue";
import TwoApplicationLeft from "./ApplicationTwo.vue";
import Configuration from "./ConfigurationApps.vue";
import SettingApp from "./SettingsApp.vue";
import StartLeftApplication from "./StartLeftApp.vue";
export default {
  components: {
    OneApplicationLeft,
    TwoApplicationLeft,
    Configuration,
    SettingApp,
    StartLeftApplication,
  },
  computed: {
    ...mapState([
      "currentLeftComponent",
      "currentRightComponent",
      "isDarkTheme",
    ]),
  },
};
</script>
<style scoped>
.main-app {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.app-content {
  width: 80%;
  min-height: 80%;
  -webkit-box-shadow: 4px 4px 15px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 15px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 15px 0px rgba(34, 60, 80, 0.2);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.left-app,
.right-app {
  width: 50%;
  min-height: 100%;
  min-width: 350px;
  margin: 0 auto;
}
.left-app {
  background-color: var(--bacground-color-left-app);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.right-app {
  background-color: var(--bacground-color-right-app);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.darkTheme {
  background-color: black;
}

@media (max-width: 768px) {
  .app-content {
    width: 100%;
  }
  .left-app,
  .right-app {
    width: 80%;
    min-height: 100%;
    margin: 0 auto;
  }
}
</style>

 