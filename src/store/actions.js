import types from './mutation-types'

const actions = {
    setAppBarTitle({commit}, title) {
        commit(types.SET.APPBAR.TITLE, title)
    }
}

export default actions