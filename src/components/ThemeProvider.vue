<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Theme-provider",
  computed: {
    ...mapState(["selectedTheme"]),
  },
  methods: {
    ...mapMutations(["setCurrentTheme"]),
  },
  watch: {
    selectedTheme() {
      this.setCurrentTheme(this.selectedTheme);
    },
  },
};
</script>
<style>
.defaultTheme {
  --background-color-left-app: #61e7ff;
  --background-color-right-app: #acf2e0;
  --color-text-left-app: black;
  --color-text-title-right-app: black;
  --color-text-right-app: black;
  --color-text-right-app-hover: white;
  --background-color-right-app-element: white;
  --background-color-left-app-element: #fffefb;
  --border-color-left-app: #8a2be2;
  --border-color-right-app: #8a2be2;
  --transition-sec: 0.3s;
  --transform-scale: 1.2;
  --text-color-error-message: #eb4034;
  --background-color-hover: dodgerblue;
  --text-color-button: white;
  --transform-rotate: 45deg;
  --negative-transform-rotate: -45deg;
}
.oppositeTheme {
  --background-color-left-app: #acf2e0;
  --background-color-right-app: #61e7ff;
  --color-text-left-app: black;
  --color-text-title-right-app: black;
  --color-text-right-app: black;
  --color-text-right-app-hover: white;
  --background-color-right-app-element: white;
  --background-color-left-app-element: #fffefb;
  --border-color-left-app: #8a2be2;
  --border-color-right-app: #8a2be2;
  --transition-sec: 0.3s;
  --transform-scale: 1.2;
  --text-color-error-message: #eb4034;
  --background-color-hover: dodgerblue;
  --text-color-button: white;
  --transform-rotate: 45deg;
  --negative-transform-rotate: -45deg;
}
</style>