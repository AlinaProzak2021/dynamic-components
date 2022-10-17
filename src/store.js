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
            currentRightComponent: 'Configuration'
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
        }
    }
})
export default store;