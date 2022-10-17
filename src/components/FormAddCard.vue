<template>
  <form class="form-add" @submit.prevent="addCard(inputString)">
    <input
      type="text"
      class="form-input"
      v-model="inputString"
      placeholder="Введите"
    />
    <button :disabled="isNotValidString" class="form-button">Добавить</button>
    <div v-if="isSecondWordEmpty && errorMessage">
      Второе слово не должно быть пустой строкой
    </div>

    <ul v-for="(cardItem, index) in cardList" :key="index">
      {{
        doFirstLetterToUpperCase(cardItem)
      }}
    </ul>
  </form>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      inputString: "",
      errorMessage: false,
    };
  },
  methods: {
    isNotTwoWords() {
      if (this.inputString.split(" ").length == 2) {
        return false;
      } else return true;
    },
    doFirstLetterToUpperCase(cardItem) {
      let firstWord = cardItem.split(" ").slice(0, 1);
      let secondWord = cardItem.split(" ").slice(1);
      firstWord = firstWord[0][0].toUpperCase() + firstWord[0].substring(1);
      secondWord = secondWord[0][0].toUpperCase() + secondWord[0].substring(1);
      return firstWord + " " + secondWord;
    },
    ...mapMutations(["addCardToList"]),
    addCard(inputString) {
      if (this.isSecondWordEmpty) {
        this.errorMessage = true;
      } else {
        this.addCardToList(inputString);
      }
    },
  },
  computed: {
    makeStringArray() {
      return this.inputString.split(" ");
    },
    isSecondWordEmpty() {
      return this.makeStringArray[1] == "";
    },
    isNotValidString() {
      return this.isNotTwoWords(this.inputString);
    },
    isDisplayErrorMessage() {
      return this.errorMessage;
    },
    ...mapState(["cardList"]),
  },
};
</script>
<style scoped>
</style>