import { createStore } from 'vuex'

interface State {
  isLogin: boolean | null
  isModalActive: boolean
  isBookmarked: boolean
  isSettings: boolean
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
    isBookmarked: false,
    isSettings: false,
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
    isModal(state) {
      return state.isModalActive
    },
    isBookmarked(state) {
      return state.isBookmarked
    },
    isSettings(state) {
      return state.isSettings
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
    login(state) {
      state.isLogin = !state.isLogin
    },
    updateAllLoaders(state) {
      state.popular.isLoading = true
      state.newPosts.isLoadingNew = true
      state.post.isLoadingPost = true
      state.home.isLoadingHome = true
    },
    isBookmarked(state, flag) {
      state.isBookmarked = !state.isBookmarked
    },
    isSettings(state, flag) {
      state.isSettings = !state.isSettings
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
  actions: {},
  modules: {}
})
