<template>
<div class="card-body">
<h1>blog sayfası</h1>
<div class="row">
  <div class="col-6">1</div>
  <div class="col-6">1</div>
</div>
</div>
</template>


<script>
export default {
  layout: "admin",
  head() {
    return {
      title: "Blog ekranı component",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
     hid: 'description',
            name: 'description',
            content: 'Alperen Sözen'
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