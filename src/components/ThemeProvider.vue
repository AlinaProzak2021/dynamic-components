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
      //Abba
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
  --text-color-error-message: #eb4034;
  --background-color-hover: dodgerblue;
  --text-color-button: white;
  --background-color-not-allowed: #a9a9a9;
}
.oppositeTheme {
  --background-color-left-app: #40e0d0;
  --background-color-right-app: #ffb6c1;
  --color-text-left-app: black;
  --color-text-title-right-app: black;
  --color-text-right-app: black;
  --color-text-right-app-hover: white;
  --background-color-right-app-element: #87CEFA;
  --background-color-left-app-element: #fffefb;
  --border-color-left-app: #8a2be2;
  --border-color-right-app: #1e90ff;
  --text-color-error-message: #eb4034;
  --background-color-hover: #1e90ff;
  --text-color-button: white;
  --background-color-not-allowed: #a9a9a9;
}
.defultfont {
  --font-family: "Montserrat", sans-serif;
}
.Arial {
  --font-family: "Sono", sans-serif;
}

.Times{
  --font-family: "Times New Roman", sans-serif  
}
</style>