import {
    createStore
} from 'vuex'
import componentNames from "../resources/componentNames.json"
const store = createStore({
    state() {
        return {
            cardList: [],
            componentNames: componentNames.componentName,
            currentComponentNames: componentNames.currentComponentNames,
            dynamicLeftComponent: componentNames.dynamicLeftComponent,
            themes : componentNames.themes,
            currentTheme: "theme1"
        }
    },
    mutations: {
        addCardToList(state, newCard) {
            state.cardList.push(newCard)
        },
        deleteCard(state, index) {
            state.cardList.splice(index, 1)
        },
        setRightComponentName(state, rightComponentName) {
            state.currentComponentNames.currentRightComponent = rightComponentName;
        },
        setLeftComponentName(state, leftComponentName) {
            state.currentComponentNames.currentLeftComponent = leftComponentName
        },
        setDynamicLeftComponent(state, dynamicLeftComponentName) {
            state.dynamicLeftComponent = dynamicLeftComponentName;
        },
        setCurrentTheme(state, theme) {
            state.currentTheme = theme;
        }
    }
})
export default store;