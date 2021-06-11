<template>
  <div>
    <h1>The users view</h1>
    <input type="text" v-model="userId" />
    <button @click="onLoadUser">Load User</button>
  </div>
</template>

<script>
export default {
  layout: "users",
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push("/users/" + this.userId);
    },
  },
};
</script>
