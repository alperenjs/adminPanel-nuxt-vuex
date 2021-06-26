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
      title: "Normal ekran index",
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
  methods: {},
  mounted() {},
};
</script>
