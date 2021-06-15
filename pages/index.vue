<template>
  <div>
    <h1>içerik</h1>
  </div>
</template>

<script>
export default {
  layout: "admin",
  head() {
    return {
      title: "component headi",
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
};
</script>
