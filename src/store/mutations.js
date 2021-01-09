import Vue from 'vue'
import types from './mutation-types'

const mutations = {
    [types.SET.APPBAR.TITLE](state, newTitle) {
        Vue.set(state.appBar, 'title', newTitle)
    }
}

export default mutations