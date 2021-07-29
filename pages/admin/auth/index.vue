<template>
  <div>
  <div class="wrapper">
<section class="container">
<header class="landing-header">
<div class="landing-header__left">
<img class="logo" src="https://static.paddle.com/assets/images/logo/logo-primary.svg">
</div>
<div class="landing-header__right">
<div class="pills">
<a class="soz-pill" href="https://paddle.com/demo">Request a Demo</a>
<span class="soz-pill selected">Login</span>
</div>
</div>
</header>

<form class="soz-form" @submit.prevent="onSubmit" >
<input type="hidden" name="_token" value="EqSg0HayriGq47DCmsryMVIMAYWDtEY0aXiHyM1j">
<div class="soz-form__element">
<input class="soz-form__input soz-form__input--large" v-model="email" id="email" type="email" placeholder="E-posta" name="email" required="Lütfen e-posta adresinizi giriniz.">
</div>
<div class="soz-form__element">
<input class="soz-form__input soz-form__input--large"  v-model="password" id="password"  placeholder="Şifre" type="password" name="password" required="Lütfen şifrenizi giriniz.">
</div>
<div class="soz-form__element">
<button class="soz-btn-primary soz-btn-primary--big is-block success" type="submit">Giriş Yap »</button>
</div>
<p class="soz-form__description password-reset" style="margin-top: 16px;">Forgot your password? <a href="https://vendors.paddle.com/password/reset">Reset it</a>.</p>
</form>
</section>
</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "default",
    head() {
    return {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/custom/login.css",
        },
      ]
    }
    },
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("auth/authenticateUser", {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/admin");
        })
        .catch((err) => console.log(erry));
    },
  },
};
</script>