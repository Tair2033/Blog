<template>
  <div class="navbar">
    <div class="navbar__body">
      <div class="container">
        <div class="navbar__content">
          <div class="navbar__main">
            <div class="navbar__logo logo">
              <routerLink to="/">
                <img src="../assets/blog.png" alt="logo">
              </routerLink>
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
              Log in
            </button>
          </div>
          <!-- <div class="navbar__user"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

export default {
  name: 'TheNavbar'
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
    border: none;
    background-color: rgb(161, 193, 245);
    border-radius: 10px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
  }

  &__login-btn:hover {
    background-color: rgb(91, 154, 255);
    color: white;
  }
}
</style>
