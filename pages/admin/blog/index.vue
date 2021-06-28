<template>
  <div class="card-body">
    <Texteditor />
  </div>
</template>


<script>
import Texteditor from "@/components/Texteditor.vue";

export default {
  components: {
    Texteditor,
  },
  layout: "admin",
  head() {
    return {
      title: "Blog ekranı component",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Alperen Sözen",
        },
      ],
    };
  },

  data() {
    return {};
  },

  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/admin/auth");
    },
  },
  mounted() {},
};
</script>