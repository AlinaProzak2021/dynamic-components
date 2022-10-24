import {
    createStore
} from 'vuex'
import themes from "../json resources/themes.json"
import componentNames from "../json resources/componentNames.json"
const store = createStore({
    state() {
        return {
            cardList: [],
            componentNames: componentNames,
            currentRightComponent: componentNames.configurationApp,
            currentLeftComponent: componentNames.playleftApp,
            dynamicLeftComponent: componentNames.oneApplication,
            themes: themes,
            currentTheme: themes.defaultTheme,
            selectedTheme: ''
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
            state.currentRightComponent = rightComponentName
        },
        setLeftComponentName(state, leftComponentName) {
            state.currentLeftComponent = leftComponentName
        },
        setDynamicLeftComponent(state, dynamicLeftComponentName) {
            state.dynamicLeftComponent = dynamicLeftComponentName
        },
        setCurrentTheme(state, theme) {
            state.currentTheme = theme;
        },
        setSelectedTheme(state, selectedTheme) {
            state.selectedTheme = selectedTheme
        }

    }
})
export default store;