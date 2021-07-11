<template>
  <div>
    <nuxt-link to="/admin" class="menu-link">
                          <i class="menu-bullet menu-bullet-dot">
                            <span></span>
                          </i>
                          <span class="menu-text">admine git</span>
                        </nuxt-link>
                          <nuxt-link to="/admin/345" class="menu-link">
                          <i class="menu-bullet menu-bullet-dot">
                            <span></span>
                          </i>
                          <span class="menu-text">error'a git</span>
                        </nuxt-link>
    <h1>normal içerik indexi</h1>
  </div>
</template>

<script>
export default {
  layout: "default",
  head() {
    return {
      title: "Alperen Sözen - Blog Sayfası",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
         {
          hid: "description",
          name: "description",
          content: "Blog sayfası test, Bir frontend developer olarak vuejs kullanan alperen, bu sayfanın google'a indexlenip indexlenmediğini kontrol etmek için bu çalışmayı yapmıştır.",
        },
             {
          hid: "tags",
          name: "tags",
          content: "Blog, alperen sözen, alperen, website yapımı, website, internet sitesi, blog, javascript, developer, yazılımcı",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>
