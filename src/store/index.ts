import { createStore } from 'vuex'

interface State {
  notification: {
    text: string
    type: string
    isActive: boolean
  }
  popular: {
    isLoading: boolean
  }
  newPosts: {
    isLoadingNew: boolean
  }
  post: {
    isLoadingPost: boolean
  }
}

export default createStore<State>({
  state: {
    notification: {
      text: 'Hello World',
      type: 'Default',
      isActive: false
    },
    popular: {
      isLoading: true
    },
    newPosts: {
      isLoadingNew: true
    },
    post: {
      isLoadingPost: true
    }
  },
  getters: {
    isLoadingPost(state) {
      return state.post.isLoadingPost
    },
    isLodingPopular(state) {
      return state.popular.isLoading
    },
    isLoadingNew(state) {
      return state.newPosts.isLoadingNew
    },
    getNotifType(state): string {
      return state.notification.type
    },
    getNotifText(state): string {
      return state.notification.text
    }
  },
  mutations: {
    updateAllLoaders(state) {
      state.popular.isLoading = true
      state.newPosts.isLoadingNew = true
      state.post.isLoadingPost = true
    },
    changeNotifType(state, type: string) {
      state.notification.type = type
    },
    changeNotifText(state, text: string) {
      state.notification.text = text
    },
    changePopularLoadingStatus(state) {
      state.popular.isLoading = false
    },
    changeNewLoadingStatus(state) {
      state.newPosts.isLoadingNew = false
    },
    changePostLoadingStatus(state) {
      state.post.isLoadingPost = false
    }
  },
  actions: {
    changeNotifType(context, type): void {
      context.commit('changeNotifType', type)
    },
    changeNotifText(context, text) {
      context.commit('changeNotifText', text)
    },
    changePopularLoadingStatus(context) {
      context.commit('changePopularLoadingStatus')
    },
    changeNewLoadingStatus(context) {
      context.commit('changeNewLoadingStatus')
    },
    changePostLoadingStatus(context) {
      context.commit('changePostLoadingStatus')
    },
    updateAllLoaders(context) {
      context.commit('updateAllLoaders')
    }
  },
  modules: {}
})
