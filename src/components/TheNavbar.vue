<template>
  <div class="navbar">
    <div class="navbar__body">
      <div class="container">
        <div class="navbar__content">
          <div class="navbar__main">
            <div class="navbar__logo logo">
              <router-link to="/">
                <img
                  src="/images/blog.png"
                  alt="logo"
                >
              </router-link>
            </div>

            <ul class="navbar__menu burger">
              <li
                v-for="(item, index) in navbarItems"
                :key="index"
                class="navbar__menu-item"
                @click="updateLoaders"
              >
                <routerLink :to="item">
                  {{ index }}
                </routerLink>
              </li>
            </ul>
          </div>

          <div class="navbar__right">
            <div
              class="navbar__burger"
              @click="isBurger = !isBurger"
            >
              <i class="fa-solid fa-bars" />
            </div>

            <div
              v-if="isLogin"
              class="navbar__user"
              @click="toggleUserPopover"
            >
              <div class="navbar__preview">
                <img
                  :src="user.preview"
                  alt=""
                >
              </div>
              <div class="navbar__nickname">
                {{ user.nickname }}
              </div>
              <AppPopover
                v-if="isUserPopover"
                :content="userItems"
              />
            </div>

            <div
              v-if="!isLogin"
              class="navbar__login"
            >
              <button
                type="button"
                class="navbar__login-btn"
                @click="toggleModalStatus"
              >
                <span>Log in</span>
                <i class="exit fa-solid fa-right-to-bracket" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isBurger"
      class="navbar__adaptive"
    >
      <ul class="navbar__menu-active">
        <li
          v-for="(item, index) in navbarItems"
          :key="index"
          class="navbar__menu-item-active"
          @click="navbarItemClick"
        >
          <routerLink :to="item">
            {{ index }}
          </routerLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import { user } from '@/mocks/data'
import { defineComponent } from 'vue'
import AppPopover from './AppPopover.vue'

export default defineComponent({
  name: 'TheNavbar',
  components: { AppPopover },
  data: () => {
    return {
      user,
      isBurger: false,
      isUserPopover: false,
      userItems: {
        list: ['My account', 'Settings', 'Exit'],
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
    updateLoaders() {
      store.dispatch('updateAllLoaders')
    },
    navbarItemClick() {
      this.updateLoaders()
      this.isBurger = !this.isBurger
    },
    toggleUserPopover(e: MouseEvent) {
      this.userItems.position = {
        x: e.clientX - 100,
        y: (e.target as HTMLElement).getBoundingClientRect().top + 30
      }

      this.isUserPopover = !this.isUserPopover
    },
    reloadPage(): void {
      location.reload()
    },
    toggleModalStatus() {
      const body = document.querySelector('body')
      body?.classList.toggle('active-modal')
      store.dispatch('changeModalStatus')
    }
  }
})
</script>

<style lang="scss" scoped>
a {
  color: rgb(150, 150, 150);
}

.active-link {
  color: rgb(134, 174, 254);
  font-weight: 800;
}

.navbar {
  z-index: 50;
  background-color: rgb(4, 15, 26);
  position: fixed;
  width: 100vw;
  padding: 0 20px;

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

  &__adaptive {
    padding-top: 30px;
  }

  &__menu-active {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__menu-item-active {
    width: 100%;
    text-align: center;
    list-style: none;
    margin-bottom: 10px;
    font-size: 25px;
    border-radius: 10px;
    cursor: pointer;
  }

  &__menu-item-active:hover {
    background-color: rgba(255, 252, 252, 0.342);
  }

  &__menu-item-active a {
    padding: 15px 0;
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  &__menu {
    display: flex;
    align-items: center;
  }

  &__menu-item {
    margin-right: 30px;
    list-style: none;
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__menu-item a {
    transition: all 0.25s;
    text-decoration: none;
    font-size: calc(16px + 4 * (100vw / 1400));
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  &__user {
    cursor: pointer;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__user:hover {
    .navbar__preview {
      box-shadow: 0px 0px 21px 5px rgba(34, 60, 80, 0.253);
    }

    .navbar__nickname {
      text-shadow: -6px 1px 7px rgba(223, 218, 216, 0.396);
    }
  }

  &__preview {
    cursor: pointer;
    background-color: rgba(78, 78, 78, 0.778);
    max-height: 35px;
    max-width: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    transition: all 0.4s;
    margin-bottom: 4px;
  }

  &__preview img {
    object-fit: contain;
    height: auto;
    min-height: 35px;
    min-width: 35px;
  }

  .navbar__nickname {
    font-size: 14px;
    color: rgb(242, 242, 242);
    transition: all 0.8s;
    margin-top: 2px;
    font-weight: 500;
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
    color: black;

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

@media (min-width: 634px) {
  .navbar__burger {
    display: none;
  }

  .navbar__adaptive {
    display: none;
  }
}

@media (max-width: 633px) {
  .burger {
    display: none;
  }

  .navbar__burger {
    cursor: pointer;
    margin-right: 15px;
    font-size: 30px;
  }

  .navbar__burger i {
    transition: all 0.3s;
    color: white;
  }

  .navbar__burger i:hover {
    transition: all 0.3s;

    color: rgb(20, 96, 246);
  }
}
</style>
