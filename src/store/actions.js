import types from './mutation-types'

const actions = {
    setAppBarTitle({commit}, title) {
        commit(types.SET.APPBAR.TITLE, title)
    },

    setNavigationValue({commit}, value) {
        commit(types.SET.BOTTOMNAVIGATION.VALUE, value)
    }
}

export default actions