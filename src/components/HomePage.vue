<template>
  <main class="main-app">
    <div class="app-content">
      <section class="left-app">
        <KeepAlive>
          <component :is="currentLeftComponent"></component>
        </KeepAlive>
      </section>
      <section class="right-app">
        <component :is="currentRightComponent"></component>
      </section>
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";
import ProvideTheme from "./ThemeProvider.vue";
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
    ProvideTheme,
  },
  computed: {
    ...mapState(["currentRightComponent", "currentLeftComponent"]),
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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.app-content {
  width: 80%;
  min-height: 80%;
  -webkit-box-shadow: 0px 4px 53px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 53px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 53px 2px rgba(34, 60, 80, 0.2);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.left-app,
.right-app {
  width: 50%;
  min-width: 350px;
  margin: 0 auto;
  z-index: 2;
}
.left-app {
  z-index: 3;
}

.left-app:hover,
.right-app:hover {
  outline: 2px solid var(--background-color-hover);
}
.left-app {
  background-color: var(--background-color-left-app);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.right-app {
  background-color: var(--background-color-right-app);
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 768px) {
  .main-app {
    display: block;
  }
  .app-content {
    width: 100%;
  }
  .left-app,
  .right-app {
    margin: 0 auto;
  }
}
</style>

 