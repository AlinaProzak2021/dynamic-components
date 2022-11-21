import {
    createStore
} from 'vuex'
import themes from "../json resources/themes.json"
import componentNames from "../json resources/componentNames.json"
import errors from "../json resources/errors.json"
import fonts from "../json resources/fonts.json"
import selectOptionsTwoApp from "../json resources/selectOptions.json"
const store = createStore({
    state() {
        return {
            cardList: [],
            componentNames: componentNames,
            currentRightComponent: componentNames.configurationApp,
            currentLeftComponent: componentNames.playleftApp,
            dynamicLeftComponent: componentNames.oneApplication,
            themes,
            currentTheme: themes.defaultTheme,
            selectedTheme: '',//Abba
            errors,
            fonts,
            selectedFont: fonts.DefultFont, 
            selectOptionsTwoApp: selectOptionsTwoApp.selectOptions
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
        },
        setSelectedFont(state, selectedFont) {
            state.selectedFont = selectedFont
        }
    }
})
export default store;