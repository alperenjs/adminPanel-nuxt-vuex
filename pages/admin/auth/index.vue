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
  layout: "default",
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
          this.$router.push("/");
          console.log("başarılı");
        })
        .catch((err) => console.log(erry));
    },
  },
};
</script>