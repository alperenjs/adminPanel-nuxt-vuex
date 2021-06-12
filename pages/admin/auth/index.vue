<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="email">Email</label>
      <input v-model="email" id="email" type="email" />
      <br />
      <label for="password">password</label>
      <input v-model="password" id="password" type="password" />
      <button type="submit">{{ isLogin ? "Login" : "Kayıt Ol" }}</button>
    </form>
    <button @click="isLogin = !isLogin">
      Switch to {{ isLogin ? "Kayıt Ol" : "Giriş Yap" }}
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "admin",
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      let authUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFGp0MSMWVYcxGP8bwR1qP5y0IZDLgjes";
      if (!this.isLogin) {
        authUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFGp0MSMWVYcxGP8bwR1qP5y0IZDLgjes";
      }
      axios
        .post(authUrl, {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>