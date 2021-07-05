// export const actions = {
// nuxtServerInit(store, context) {
//     console.log('aaaaa', store, context)
// }
// }
export const state = () => ({
    bNav: false,
    nLoading: false
})

export const actions = {
    nuxtServerInit(store, { app: { $cookies } }) {
        let user = $cookies.get('user') ? $cookies.get('user') : ''
        store.commit('user/M_UPDATE_USER', user)
    }
}

export const mutations = {
    M_UPDATE_NAV(state, payload) {
        state.bNav = payload
    },
    M_UPDATE_LOADING(state, payload) {
        state.nLoading = payload
    }
}

export const getters = {
    getNav(state) {
        return state.bNav ? '显示' : '隐藏'
    }
}