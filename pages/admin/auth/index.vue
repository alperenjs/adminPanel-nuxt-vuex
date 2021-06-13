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
      this.$store
        .dispatch("authenticateUser", {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/");
        });
    },
  },
};
</script>