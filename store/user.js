export const state = () => ({
    token: ''
})

export const actions = {
    A_UPDATE_USER({ commit, user }, payload) {
        commit('M_UPDATE_USER', payload)
    }
}

export const mutations = {
    M_UPDATE_USER(state, payload) {
        state.token = payload.token
    }
}