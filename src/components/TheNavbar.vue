<template>
  <div class="navbar">
    <div class="navbar__body">
      <div class="container">
        <div class="navbar__content">
          <div class="navbar__main">
            <div class="navbar__logo logo">
              <router-link to="/">
                <img src="../assets/blog.png" alt="logo">
              </router-link>
            </div>
            <ul class="navbar__menu">
              <li class="navbar__menu-item" @click="updateLoaders" v-for="(item, index) in navbarItems" :key="index">
                <routerLink :to="item">
                  {{ index }}
                </routerLink>
              </li>
            </ul>
          </div>
          <div class="navbar__user" v-if="isLogin">
            <div class="navbar__preview" @click="toggleUserPopover">
              <img :src="user.preview" alt="">
            </div>
            <AppPopover v-if="isUserPopover" :content="userItems" />
          </div>
          <div class="navbar__login" v-if="!isLogin">
            <button type="button" @click="toggleModalStatus" class="navbar__login-btn">
              <span>Log in</span>
              <i class="exit fa-solid fa-right-to-bracket"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import store from '@/store'
import { user } from '@/mocks/data'
import { defineComponent } from 'vue'
import AppPopover from './AppPopover.vue'

export default defineComponent({
  name: 'TheNavbar',
  data: () => {
    return {
      user,
      isUserPopover: false,
      userItems: {
        list: [
          'My account',
          'Settings',
          'Exit'
        ],
        position: {
          x: 0,
          y: 0
        }
      },
      navbarItems: {
        Home: '/',
        Popular: '/popular',
        'Last Posts': '/new-posts'
      }
    }
  },
  computed: {
    isLogin() {
      return store.getters.isLogin
    }
  },
  methods: {
    toggleUserPopover(e: Event) {
      this.userItems.position = {
        x: (e.target as HTMLElement).getBoundingClientRect().left + 300,
        y: (e.target as HTMLElement).getBoundingClientRect().top + 60
      }

      this.isUserPopover = !this.isUserPopover
    },
    reloadPage(): void {
      location.reload()
    },
    updateLoaders() {
      store.dispatch('updateAllLoaders')
    },
    toggleModalStatus() {
      const body = document.querySelector('body')
      body?.classList.toggle('active-modal')
      store.dispatch('changeModalStatus')
    }
  },
  components: { AppPopover }
})

</script>

<style lang='scss' scoped>
a {
  color: rgba(0, 0, 0, 0.891);
}

.active-link {
  color: rgba(21, 43, 239, 0.867);
  font-weight: 800;
}

.navbar {

  &__body {
    font-family: 'Montserrat', sans-serif;
  }

  &__main {
    display: flex;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    margin-right: 40px;
  }

  &__logo:hover {
    cursor: pointer;
  }

  &__menu {
    display: flex;
    align-items: center;
  }

  &__menu-item {
    margin-right: 30px;
    list-style: none;
  }

  &__menu-item a {
    transition: all 0.25s;
    text-decoration: none;
    // font-weight: 500;
    font-size: calc(16px + 4 * (100vw / 1400));
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  &__menu-item a:hover {
    color: rgba(43, 60, 217, 0.802);
  }

  &__user {
    padding: 5px;
  }

  &__preview {
    cursor: pointer;
    background-color: rgba(78, 78, 78, 0.778);
    max-height: 50px;
    max-width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0px 0px 21px 5px white;
    transition: all 0.4s;
  }

  &__preview img {
    object-fit: contain;
    height: auto;
  }

  &__preview:hover {
    box-shadow: 0px 0px 21px 5px rgba(34, 60, 80, 0.253);
  }

  &__login-btn {
    background: none;
    padding: 10px;
    min-width: 75px;
    overflow: hidden;
    border-radius: 11px;
    transition: all 0.4s;
    color: rgba(22, 107, 255, 0.865);
    border: 1px solid rgba(22, 107, 255, 0.547);
    display: flex;
    margin-right: 10px;
    cursor: pointer;
    position: relative;
  }

  &__login-btn span {
    z-index: -20;
    font-family: 'Montserrat', sans-serif;
    display: block;
    margin-left: 3px;
    font-weight: 500;
    font-size: calc(14px + 2 * (100vw / 1400));
  }

  &__login-btn:hover {
    min-width: 90px;
    background-color: rgba(22, 107, 255, 0.834);
    color: white;

    .exit {
      visibility: visible;
    }
  }

  .exit {
    transition: all none;
    transition-delay: 0.1s;
    visibility: hidden;
    z-index: 20;
    position: absolute;
    right: 0;
    left: 0;
    font-size: 20px;
    color: white;
  }
}
</style>
