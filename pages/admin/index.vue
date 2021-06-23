<template>
<div>

<h1>admin içeriği</h1>
</div>
</template>

<script>
export default {
  layout: "admin",
  head() {
    return {
      title: "Admin ekranı index",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/admin/auth");
    },

  },
  mounted(){
  }
};
</script>
