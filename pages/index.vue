<template>
  <div>
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
