<template>
  <div class="one-left-app">
    <img
      @click="setLeftComponentName(componentNames.playleftApp)"
      class="back__img"
      src="../../resources/back.png"
      alt=""
    />
    <formAdd />
    <ul class="list" v-for="(cardItem, index) in cardList" :key="index">
      <li class="list-item">
        {{ doFirstLetterToUpperCase(cardItem) }}
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
    doFirstLetterToUpperCase(cardItem) {
      let firstWord = cardItem.split(" ").slice(0, 1);
      let secondWord = cardItem.split(" ").slice(1);
      firstWord = firstWord[0][0].toUpperCase() + firstWord[0].substring(1);
      secondWord = secondWord[0][0].toUpperCase() + secondWord[0].substring(1);
      return firstWord + " " + secondWord;
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
.back__img {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
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
  background-color: var(--background-color);
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
  background-color: var(--background-color);
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
    width: 180px;
    height: 20px;
    border: none;
    border-radius: 0;
    font-size: 12px;
  }
}
</style>