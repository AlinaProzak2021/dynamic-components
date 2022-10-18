<template>
  <div class="form-container">
    <form class="form-add" @submit.prevent="addCard(inputString)">
      <input
        type="text"
        class="form-input"
        v-model="inputString"
        placeholder="Введите"
      />
      <button
        :disabled="isNotValidString"
        :class="{
          form__button_allowed: isNotValidString == true,
        }"
        class="form-button"
      >
        Добавить
      </button>
    </form>
    <div class="form-isNotValid" v-if="isSecondWordEmpty">
      Второе слово не должно быть пустой строкой
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
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
  },
};
</script>
<style scoped>
.form-add {
  width: 400px;
  height: 60px;
  border: 1px solid var(--border-color);
  background-color: var(--bacground-color-form);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}
.form-input {
  padding-left: 15px;
  width: 220px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid var(--border-color);
  font-size: 12px;
  background-color: var(--bacground-color-form);
}
.form-button {
  width: 120px;
  height: 30px;
  background: var(--border-color);
  color: var(--text-color-button);
  font-weight: bold;
  border: none;
}
.form-button:hover {
  background-color: var(--background-color-hover);
}
.form__button_allowed {
  background-color: var(--background-color-hover);
}
.form-isNotValid {
  justify-items: center;
  text-align: center;
  font-size: 14px;
  color: var(--text-color-error);
  font-weight: bold;
  transition: 3s;
  padding-top: 0;
  transition: 1s;
}
@media (max-width: 1024px) {
  .form-add {
    width: 300px;
  }
  .form-input {
    width: 150px;
    height: 30px;
    border: none;
    font-size: 12px;
  }
  .form-button {
    width: 90px;
    height: 30px;
  }
}
@media (max-width: 768px) {
  .form-add {
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 0;
  }
  .form-input {
    width: 100px;
    height: 20px;
  }
  .form-button {
    width: 70px;
    font-weight: normal;
    font-size: 12px;
    height: 20px;
  }
}
</style>