<template>
  <div class="one-left-app">
    <div
      class="back-to-start-app"
      @click="setLeftComponentName(componentNames.playleftApp)"
    >
      <img class="back__img" src="../../resources/back.png" alt="" />
    </div>
    <formAdd />
    <ul class="cards-list">
      <li class="list-item" v-for="(cardItem, index) in cardList" :key="index">
        {{ changeRegisterFirstLetterToUpperCase(cardItem) }}
        <div @click="deleteCard(index)" class="item-delete"></div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import formAdd from "./FormAddCard.vue";
export default {
  components: {
    formAdd,
  },
  methods: {
    changeRegisterFirstLetterToUpperCase(cardItem) {
      let resultString = cardItem.split(" ");
      for (let item = 0; item < resultString.length; item++) {
        resultString[item] =
          resultString[item][0].toUpperCase() + resultString[item].substr(1);
      }
      return resultString.join(" ");
    },
    ...mapMutations(["deleteCard", "setLeftComponentName"]),
  },
  computed: {
    ...mapState(["cardList", "componentNames"]),
  },
};
</script>
<style>
.one-left-app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  --background-color-delete: #ff0000;
}
.back-to-start-app {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.back-to-start-app:hover {
  transform: scale(1.2);
}
.back__img {
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.back__img:hover {
  transform: scale(1.2);
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
  background-color: var(--bacground-color-form);
  margin-bottom: 20px;
}
.item-delete {
  width: 30px;
  height: 30px;
  background-color: var(--background-color-delete);
  position: relative;
  border-radius: 5px;
}
.item-delete:hover {
  transform: scale(1.2);
}

.item-delete::before,
.item-delete::after {
  content: "";
  position: absolute;
  width: 3px;
  height: 20px;
  top: 5px;
  left: 14px;
  background-color: var(--bacground-color-form);
}

.item-delete::before {
  transform: rotate(45deg);
}
.item-delete::after {
  transform: rotate(-45deg);
}

@media (max-width: 1024px) {
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
  .list-item {
    width: 260px;
    height: 20px;
    border: none;
    border-radius: 0;
    font-size: 12px;
  }
}
</style>