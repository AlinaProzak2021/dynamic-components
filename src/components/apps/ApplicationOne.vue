<template>
  <div class="one-left-app">
    <BackToApp :backToApp="backToStartLeftApp" />
    <div class="form-container">
      <form class="form-add" @submit.prevent="addCard(inputString)">
        <input
          type="text"
          class="form-input"
          v-model="inputString"
          placeholder="Введите"
        />
        <button
          class="form-button"
          :disabled="!isInputValid"
          :class="{ form__button_allowed: !isInputValid }"
        >
          Добавить
        </button>
      </form>
    </div>
    <p
      class="form-isNotValid"
      v-for="(error, index) in currentErrors"
      :key="index"
    >
      {{ error }}
    </p>
    <ul class="cards-list">
      <li class="list-item" v-for="(cardItem, index) in cardList" :key="index">
        {{ stringNormalization(cardItem) }}
        <div @click="deleteCard(index)" class="item-delete"></div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import BackToApp from "../BackButton.vue";
export default {
  components: {
    BackToApp,
  },
  data() {
    return {
      inputString: "",
    };
  },
  methods: {
    ...mapMutations(["deleteCard", "setLeftComponentName", "addCardToList"]),
    backToStartLeftApp() {
      this.setLeftComponentName(this.componentNames.playleftApp);
    },
    addCard(inputString) {
      if (!this.isInputValid) {
        return;
      }
      this.addCardToList(inputString);
      this.clearInputField();
    },
    clearInputField() {
      this.inputString = "";
    },
    //Изменить регистр первого символа на верхний
    capitalize(string) {
      return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    },
    // удаление пустых строк в строке
    removeExtraSpaces(inputString) {
      return inputString.replace(/\s+/g, " ").trim();
    },
    //Преобразование строки в массив строк
    convertStringToArray(inputString) {
      return inputString.split(" ");
    },
    stringNormalization(inputString) {
      let clearSring = this.removeExtraSpaces(inputString);
      let stringsArray = this.convertStringToArray(clearSring);
      let normalizedString = [];
      stringsArray.forEach((stringsArrayItem) => {
        let lowered = stringsArrayItem.toLowerCase();
        let capitalised = this.capitalize(lowered);
        normalizedString.push(capitalised);
      });
      return normalizedString.join(" ");
    },
  },

  computed: {
    ...mapState(["cardList", "componentNames", "errors"]),
    isEmptyInputString() {
      return this.inputString === "";
    },
    // Проверка на 2 слова
    // <!-- Abba -->
    isTwoWords() {
      let matchesCount = this.inputString.match(/\S+/g) || [];
      return matchesCount.length === 2;
    },
    // Проверка на запрещенные символы
    stringContainOnlyLetters() {
      return /^[A-zА-яЁё\s]+$/i.test(this.inputString);
    },
    isInputValid() {
      return (
        this.stringContainOnlyLetters &&
        this.isTwoWords &&
        !this.isEmptyInputString
      );
    },
    currentErrors() {
      let errorArray = [];
      if (this.isEmptyInputString) {
        return;
      }
      if (!this.isTwoWords) {
        errorArray.push(this.errors.errorNotTwoWords);
      }
      if (!this.stringContainOnlyLetters) {
        errorArray.push(this.errors.errorNotLetters);
      }
      return errorArray;
    },
  },
};
</script>

<style>
.one-left-app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

}

.form-add {
  width: 400px;
  height: 60px;
  border: 1px solid var(--border-color-left-app);
  background-color: var(--background-color-left-app-element);
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
  border: 1px solid var(--border-color-left-app);
  font-size: 12px;
  background-color: var(--background-color-left-app-element);
}
.form-button {
  width: 120px;
  height: 30px;
  background: var(--border-color-left-app);
  color: var(--text-color-button);
  font-weight: bold;
  border: none;
}
.form-button:hover {
  background-color: var(--background-color-hover);
}
.form__button_allowed {
  background-color: var(--background-color-not-allowed);
}
.form__button_allowed:hover {
  background-color: var(--background-color-not-allowed);
}
.form-isNotValid {
  justify-items: center;
  text-align: center;
  font-size: 14px;
  color: var(--text-color-error-message);
  font-weight: bold;
  transition: 3s;
  padding-top: 0;
  transition: 1s;
  margin-bottom: 10px;
}

.cards-list {
  max-height: 250px;
  overflow: auto;
}
.list-item {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 380px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid var(--border-color);
  background-color: var(--background-color-left-app-element);
  margin-bottom: 20px;
}
.item-delete {
  width: 30px;
  height: 30px;
  background-color: var(--text-color-error-message);
  position: relative;
  border-radius: 5px;
}
.item-delete:hover {
  transform: scale(var(--transform-scale));
}

.item-delete::before,
.item-delete::after {
  content: "";
  position: absolute;
  width: 3px;
  height: 20px;
  top: 5px;
  left: 14px;
  background-color: var(--background-color-left-app-element);
}

.item-delete::before {
  transform: rotate(var(--transform-rotate));
}
.item-delete::after {
  transform: rotate(var(--negative-transform-rotate));
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
  .list-item {
    width: 280px;
  }
  .item-delete {
    width: 20px;
    height: 20px;
  }
  .item-delete::before,
  .item-delete::after {
    width: 2.5px;
    height: 13px;
    top: 3px;
    left: 9px;
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
  .list-item {
    width: 180px;
    height: 20px;
    border: none;
    border-radius: 0;
    font-size: 12px;
  }
}
</style>