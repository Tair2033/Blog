<template>
  <div class="modal__wrapper" @click.stop.prevent="toggleModalStatus">
    <div class="modal">
      <div class="modal__content">
        <div class="modal__container">
          <div class="modal__close" @click.stop.prevent="toggleModalStatus"> &#10008;</div>
          <div class="modal__cat">
            <div class="cat">
              <div class="ear ear--left"></div>
              <div class="ear ear--right"></div>
              <div class="face">
                <div class="eye eye--left">
                  <div class="eye-pupil"></div>
                </div>
                <div class="eye eye--right">
                  <div class="eye-pupil"></div>
                </div>
                <div class="muzzle"></div>
              </div>
            </div>
          </div>
          <div class="wrapper">
            <div class="title"><span>Login</span></div>
            <div class="modal__loader" v-if="isLogin">
              <AppLoader />
            </div>
            <form action="#" v-if="!isLogin">
              <div class="row">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Email or Phone" required>
              </div>
              <div class="row">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" required>
              </div>
              <div class="pass"><a href="#">Forgot password?</a></div>
              <div class="row button">
                <input type="button" class="submit-btn" @focus="login" value="Login">
              </div>
              <div class="signup-link">Not a member? <a href="#">Signup now</a></div>
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import store from '@/store'
import AppLoader from './AppLoader.vue'

export default defineComponent({
  name: 'AppModal',
  methods: {
    login(e: Event) {
      const $node = e.target as HTMLElement
      const body = document.querySelector('body')
      if ($node.classList.contains('submit-btn')) {
        store.dispatch('login')
        const timeout = setTimeout(() => {
          body?.classList.toggle('active-modal')
          store.dispatch('changeModalStatus')
          location.reload()
          clearTimeout(timeout)
        }, 2000)
      }
    },
    toggleModalStatus(e: Event) {
      const $node = e.target as HTMLElement
      const body = document.querySelector('body')
      if ($node.classList.contains('modal__close') ||
        $node.classList.contains('modal__wrapper')) {
        body?.classList.toggle('active-modal')
        store.dispatch('changeModalStatus')
      }
    }
  },
  computed: {
    isLogin() {
      return store.getters.isLogin
    }
  },
  components: { AppLoader }
})

</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

$color-black: #161616;
$color-white: #fff;
$size: 170px;

.modal__cat {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-black;
}

.cat {
  position: relative;
  height: $size;
  width: $size * 1.13;
}

.ear {
  position: absolute;
  top: -30%;
  height: 60%;
  width: 25%;
  background: $color-white;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 24%;
    height: 10%;
    width: 5%;
    border-radius: 50%;
    background: $color-black;
  }

  &::after {
    transform-origin: 50% 100%;
  }
}

.ear--left {
  left: -7%;
  border-radius: 70% 30% 0% 0% / 100% 100% 0% 0%;
  transform: rotate(-15deg);

  &::before,
  &::after {
    right: 10%;
  }

  &::after {
    transform: rotate(-45deg);
  }
}

.ear--right {
  right: -7%;
  border-radius: 30% 70% 0% 0% / 100% 100% 0% 0%;
  transform: rotate(15deg);

  &::before,
  &::after {
    left: 10%;
  }

  &::after {
    transform: rotate(45deg);
  }
}

.face {
  position: absolute;
  height: 100%;
  width: 100%;
  background: $color-black;
  border-radius: 50%;
}

.eye {
  position: absolute;
  top: 35%;
  height: 30%;
  width: 31%;
  background: $color-white;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    border-radius: 0 0 50% 50% / 0 0 40% 40%;
    background: $color-black;
    animation: blink 4s infinite ease-in;
  }

  @keyframes blink {
    0% {
      height: 0;
    }

    90% {
      height: 0;
    }

    92.5% {
      height: 100%;
    }

    95% {
      height: 0;
    }

    97.5% {
      height: 100%;
    }

    100% {
      height: 0;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 60%;
    height: 10%;
    width: 15%;
    background: $color-white;
    border-radius: 50%;
  }
}

.eye--left {
  left: 0;

  &::before {
    right: -5%;
  }
}

.eye--right {
  right: 0;

  &::before {
    left: -5%;
  }
}

.eye-pupil {
  position: absolute;
  top: 25%;
  height: 50%;
  width: 20%;
  background: $color-black;
  border-radius: 50%;
  animation: look-around 4s infinite;

  @keyframes look-around {
    0% {
      transform: translate(0)
    }

    5% {
      transform: translate(50%, -25%)
    }

    10% {
      transform: translate(50%, -25%)
    }

    15% {
      transform: translate(-100%, -25%)
    }

    20% {
      transform: translate(-100%, -25%)
    }

    25% {
      transform: translate(0, 0)
    }

    100% {
      transform: translate(0, 0)
    }
  }

  .eye--left & {
    right: 30%;
  }

  .eye--right & {
    left: 30%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 30%;
    right: -5%;
    height: 20%;
    width: 35%;
    border-radius: 50%;
    background: $color-white;
  }
}

.muzzle {
  position: absolute;
  top: 60%;
  left: 50%;
  height: 6%;
  width: 10%;
  background: $color-white;
  transform: translateX(-50%);
  border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
}

.modal__loader {
  position: absolute;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  z-index: 50;
  margin-top: 95px;
}

.modal__wrapper {
  transition: all 0.4s;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.57);
  font-family: 'Poppins', sans-serif;
  z-index: 50;
}

.modal {
  position: relative;
  border-radius: 20px;
  margin-top: 30px;
}

.modal__close {
  color: white;
  position: absolute;
  top: 5px;
  right: 30px;
  user-select: none;
  cursor: pointer;
  font-size: 30px;
  display: flex;
}

.modal__close:hover {
  color: rgb(227, 9, 9);
}

.modal__container {
  padding: 0 20px;
  margin: 86px auto;
  position: relative;
  display: flex;
}

.wrapper {
  border-top-right-radius: 6px;
  min-height: 406px;
  min-width: 307px;
  background-color: #fff;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
}

.wrapper .title {
  height: 90px;
  background: #354c98;
  border-top-right-radius: 5px;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper form {
  padding: 30px 25px 25px 25px;
}

.wrapper form .row {
  height: 45px;
  margin-bottom: 15px;
  position: relative;
}

.wrapper form .row input {
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 60px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  font-size: 16px;
  transition: all 0.3s ease;
}

form .row input:focus {
  border-color: #3a4775;
  box-shadow: inset 0px 0px 2px 2px #3a4775;
}

form .row input::placeholder {
  color: #999;
}

.wrapper form .row i {
  position: absolute;
  width: 47px;
  height: 100%;
  color: #fff;
  font-size: 18px;
  background: #354c98;
  border: 1px solid #354c98;
  border-radius: 5px 0 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper form .pass {
  margin: -8px 0 20px 0;
}

.wrapper form .pass a {
  color: #7474e5;
  font-size: 17px;
  text-decoration: none;
}

.wrapper form .pass a:hover {
  text-decoration: underline;
}

.wrapper form .button input {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding-left: 0px;
  background: #354c98;
  border: 1px solid #354c98;
  cursor: pointer;
}

form .button input:hover {
  background: #1e51f8;
}

.wrapper form .signup-link {
  text-align: center;
  margin-top: 20px;
  font-size: 17px;
}

.wrapper form .signup-link a {
  color: #354c98;
  text-decoration: none;
}

form .signup-link a:hover {
  text-decoration: underline;
}

@media (max-width: 605px) {
  .modal__cat {
    display: none;
  }

  .modal__loader {
    width: 90%;
  }
}
</style>
