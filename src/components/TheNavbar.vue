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
              <li class="navbar__menu-item">
                <routerLink to="/">Home</routerLink>
              </li>
              <li class="navbar__menu-item">
                <routerLink to="/popular">Popular</routerLink>
              </li>
              <li class="navbar__menu-item">
                <routerLink to="/new-posts">Last Posts</routerLink>
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

export default {
  name: 'TheNavbar',
  methods: {
    reloadPage(): void {
      location.reload()
    }
  }
}

</script>

<style lang='scss'>
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
    color: black;
    font-weight: 500;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  &__menu-item a:hover {
    color: rgba(0, 0, 0, 0.365);
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
    font-size: 15px;
  }

  &__login-exit {
    width: 20px;
    display: none;
  }
}
</style>
