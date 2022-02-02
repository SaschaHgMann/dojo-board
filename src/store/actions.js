import types from './mutation-types'

const actions = {
    setAppBarTitle({commit}, title) {
        commit(types.SET.APPBAR.TITLEMOBILE, title)
    },
    setNavigationValue({commit}, value) {
        commit(types.SET.BOTTOMNAVIGATION.VALUE, value)
    },

    showNotification({commit}, data) {
        commit(types.TRIGGER.ALERT, data)
    },
    
}

export default actions