<template>
<div>
<h1>site ayarları</h1>
</div>
</template>


<script>
import firebase from "firebase/app"
import $ from "jquery";
import toastr from "~/static/plugins/global/toastr.min.js";
import db from "~/plugins/firebaseInit.js";
import Swal from "sweetalert2"

export default {
  
  layout: "admin",
  head() {
    return {
      title: "Site Ayarları",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Alperen Sözen",
        },
      ],
    };
  },

  data() {
    return {
    };
  },

  methods: {
  
  },
  mounted() {
  },
};
</script>

<style scoped>

</style>