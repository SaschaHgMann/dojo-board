import Vue from 'vue'
import types from './mutation-types'

const mutations = {
    [types.SET.ACTIVE.USER](state, user) {
        Vue.set(state, 'activeUser', user)
    },
    [types.SET.APPBAR.TITLEMOBILE](state, newTitle) {
        Vue.set(state.appBar, 'titleMobile', newTitle)
    },
    [types.SET.BOTTOMNAVIGATION.VALUE](state, value) {
        Vue.set(state, 'navigationValue', value)
    },

    [types.TRIGGER.ALERT](state, data) {
        switch (data.type) {
            case 'success': 
                return Vue.notify({
                    group: data.group || 'app',
                    type: data.type,
                    title: data.title || 'done',
                    text: data.text || 'Hat geklappt!',
                    duration: data.timeout || 2000
                });
            case 'error': 
                return Vue.notify({
                    group: data.group || 'app',
                    type: data.type,
                    title: data.title || 'error',
                    text: data.text || 'Das hat nicht geklappt!',
                    duration: data.timeout || 5000
                });
            case 'warning': 
                return Vue.notify({
                    group: data.group || 'app',
                    type: data.type,
                    title: data.title || 'achtung',
                    text: data.text || 'Hinweis beachten!',
                    duration: data.timeout || 3000
                });
            case 'info': 
                return Vue.notify({
                    group: data.group || 'app',
                    type: data.type,
                    title: data.title || 'info',
                    text: data.text || 'Info beachten!',
                    duration: data.timeout || 3000
                })
        }
    }

}

export default mutations