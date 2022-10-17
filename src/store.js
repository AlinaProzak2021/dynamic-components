import {
    createStore
} from 'vuex'

const store = createStore({
    state() {
        return {
            cardList: []
        }

    },
    mutations: {
        addCardToList(state, newCard) {
            state.cardList.push(newCard)
        }
    }
})
export default store;