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
      title: "Alperen Sözen'in indexleme çalışmasıdır.",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Bir frontend developer olarak vuejs kullanan alperen, bu sayfanın google'a indexlenip indexlenmediğini kontrol etmek için bu çalışmayı yapmıştır.",
        },
             {
          hid: "tags",
          name: "tags",
          content: "alperen sözen, alperen, website yapımı, website, internet sitesi, blog, javascript, developer, yazılımcı",
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
