import {
    createStore
} from 'vuex'

const store = createStore({
    state() {
        return {
            cardList: [],
            componentNames: {
                playleftApp: 'StartLeftApplication',
                configurationApp: 'Configuration',
                oneApplication: 'OneApplicationLeft',
                twoApplication: 'TwoApplicationLeft',
                settingsApplication: 'SettingApp'
            },
            dynamicLeftComponent: 'OneApplicationLeft',
            currentLeftComponent: 'StartLeftApplication',
            currentRightComponent: 'Configuration',
            theme1: true,
            theme2: false

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
            state.currentRightComponent = rightComponentName;
        },
        setLeftComponentName(state, leftComponentName) {
            state.currentLeftComponent = leftComponentName
        },
        setDynamicLeftComponent(state, dynamicLeftComponentName) {
            state.dynamicLeftComponent = dynamicLeftComponentName;
        },
        setThemeTwo(state) {
            state.theme2 = true;
            state.theme1 = false;
        },
        setThemeOne(state) {
            state.theme1 = true;
            state.theme2 = false;
        }
    }
})
export default store;