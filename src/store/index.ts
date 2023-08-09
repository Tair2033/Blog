import { createStore } from 'vuex'

interface State {
  isLogin: boolean
  isFooterActive: boolean
  isModalActive: boolean
  notification: {
    text: string
    type: string
    isActive: boolean
  }
  home: {
    isLoadingHome: boolean
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
    isLogin: false,
    isModalActive: false,
    isFooterActive: true,
    notification: {
      text: 'Hello World',
      type: 'Default',
      isActive: false
    },
    home: {
      isLoadingHome: true
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
    isLogin(state) {
      return state.isLogin
    },
    isFooter(state) {
      return state.isFooterActive
    },
    isModal(state) {
      return state.isModalActive
    },
    isLoadingHome(state) {
      return state.home.isLoadingHome
    },
    isLoadingPost(state) {
      return state.post.isLoadingPost
    },
    isLodingPopular(state) {
      return state.popular.isLoading
    },
    isLoadingNew(state) {
      return state.newPosts.isLoadingNew
    },
    getNotificationStatus(state) {
      return state.notification.isActive
    },
    getNotifText(state): string {
      return state.notification.text
    }
  },
  mutations: {
    changeFooterStatus(state) {
      state.isFooterActive = !state.isFooterActive
    },
    login(state) {
      state.isLogin = !state.isLogin
    },
    updateAllLoaders(state) {
      state.popular.isLoading = true
      state.newPosts.isLoadingNew = true
      state.post.isLoadingPost = true
      state.home.isLoadingHome = true
    },
    changeModalStatus(state) {
      state.isModalActive = !state.isModalActive
    },
    changeNotifText(state, text: string) {
      state.notification.text = text
    },
    changeNotifStatus(state) {
      state.notification.isActive = !state.notification.isActive
    },
    changeHomeLoadingStatus(state) {
      state.home.isLoadingHome = false
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
    login(context) {
      context.commit('login')
    },
    changeFooterStatus(context) {
      context.commit('changeFooterStatus')
    },
    changeModalStatus(context) {
      context.commit('changeModalStatus')
    },
    changeNotifText(context, text) {
      context.commit('changeNotifText', text)
    },
    changeNotifStatus(context) {
      context.commit('changeNotifStatus')
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
    changeHomeLoadingStatus(context) {
      context.commit('changeHomeLoadingStatus')
    },
    updateAllLoaders(context) {
      context.commit('updateAllLoaders')
    }
  },
  modules: {}
})
