<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="email">Email</label>
      <input v-model="email" id="email" type="email" />
      <br />
      <label for="password">password</label>
      <input v-model="password" id="password" type="password" />
      <button>Bas</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "admin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFGp0MSMWVYcxGP8bwR1qP5y0IZDLgjes",
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((result) => {
          console.log(result);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>