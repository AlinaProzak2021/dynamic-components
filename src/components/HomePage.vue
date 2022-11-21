<template>
  <main class="main-app">
    <div class="flex-container">
      <section class="left-app">
        <KeepAlive>
          <component :is="currentLeftComponent"></component>
        </KeepAlive>
      </section>
      <section class="right-app">
        <KeepAlive>
          <component :is="currentRightComponent"></component>
        </KeepAlive>
      </section>
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";
import ProvideTheme from "./ThemeProvider.vue";
import OneApplicationLeft from "./apps/ApplicationOne.vue";
import TwoApplicationLeft from "./apps/ApplicationTwo.vue";
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
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
.flex-container {
  width: 80%;
  min-height: 80%;
  -webkit-box-shadow: 0px 4px 53px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 53px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 53px 2px rgba(34, 60, 80, 0.2);
  display: flex;
  flex-wrap: wrap;
}
.left-app,
.right-app {
  width: 50%;
  min-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50%;
}
.left-app {
  background-color: var(--background-color-left-app);

}
.right-app {
  background-color: var(--background-color-right-app);

}

@media (max-width: 960px) {
  .main-app {
    display: block;
  }
  .flex-container {
    width: 100%;
    min-height: 100%;
  }
  .left-app,
  .right-app {
    width: 50%;
  }
}
</style>
