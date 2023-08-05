import { createStore } from 'vuex'

interface State {
  notification: {
    text: string
    type: string
  }
}

export default createStore<State>({
  state: {
    notification: {
      text: 'Hello World',
      type: 'Default'
    }
  },
  getters: {
    getNotifType(state): string {
      return state.notification.type
    },
    getNotifText(state): string {
      return state.notification.text
    }
  },
  mutations: {
    changeNotifType(state, type: string) {
      state.notification.type = type
    },
    changeNotifText(state, text: string) {
      state.notification.text = text
    }
  },
  actions: {
    changeNotifType(context, type): void {
      context.commit('changeNotifType', type)
    },
    changeNotifText(context, text) {
      context.commit('changeNotifText', text)
    }
  },
  modules: {}
})
