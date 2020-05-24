import { MutationTree, ActionTree, GetterTree } from 'vuex'

interface RootState {
  message: string
}
export const state = (): RootState => ({
  message: ''
})

export const getters: GetterTree<RootState, RootState> = {}

export const mutations: MutationTree<RootState> = {
  setMessage (state: RootState, message: string) {
    state.message = message
  }
}

export const actions: ActionTree<RootState, RootState> = {
  viewMessage ({ commit }, { message }) {
    commit('setMessage', message)
  }
}
