<template>
  <div class="navbar">
    <div class="navbar__body">
      <div class="container">
        <div class="navbar__content">
          <div class="navbar__main">
            <div class="navbar__logo logo" @click="reloadPage">
              <img src="../assets/blog.png" alt="logo">
            </div>
            <ul class="navbar__menu">
              <li class="navbar__menu-item" @click="updateLoaders" v-for="(item, index) in navbarItems" :key="index">
                <routerLink :to="item">
                  {{ index }}
                </routerLink>
              </li>
            </ul>
          </div>
          <div class="navbar__login">
            <button type="button" class="navbar__login-btn">
              <span>Log in</span>
            </button>
            <img class="navbar__login-exit" src="../assets/exit.png" />
          </div>
          <!-- <div class="navbar__user"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import store from '@/store'

export default {
  name: 'TheNavbar',
  data: () => {
    return {
      navbarItems: {
        Home: '/',
        Popular: '/popular',
        'Last Posts': '/new-posts'
      }
    }
  },
  methods: {
    reloadPage(): void {
      location.reload()
    },
    updateLoaders() {
      store.dispatch('updateAllLoaders')
    }
  }
}

</script>

<style lang='scss' scoped>
a {
  color: rgba(0, 0, 0, 0.891);
}

.active-link {
  color: rgba(43, 60, 217, 0.802);
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
    margin: 0 15px;
  }

  &__logo {
    margin-right: 40px;
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
    font-weight: 500;
    font-size: calc(16px + 4 * (100vw / 1400));
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  &__menu-item a:hover {
    color: rgba(43, 60, 217, 0.802);
  }

  &__user {
    display: block;
  }

  &__login-btn {
    padding: 10px;
    min-width: 80px;
    border-radius: 10px;
    background-color: rgba(22, 107, 255, 0.547);
    display: flex;
    transition: all 0.4s;
    margin-right: 10px;
    cursor: pointer;
    border: none;
    display: inline-flex;
  }

  &__login-btn:hover {
    min-width: 100px;
    background-color: rgb(91, 154, 255);
    color: white;
  }

  &__login-btn span {
    font-family: 'Montserrat', sans-serif;
    display: block;
    margin-left: 7px;
    font-weight: 600;
    font-size: calc(14px + 2 * (100vw / 1400));
  }

  &__login-exit {
    width: 20px;
    display: none;
  }
}
</style>
