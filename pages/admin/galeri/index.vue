<template>
<div>
<ImageGallery
  @selectImage="emitSelectedImageFromGallery($event)"
  ref="selectImage"/>
</div>
</template>


<script>
import $ from "jquery";
import toastr from "~/static/plugins/global/toastr.min.js";
import Texteditor from "@/components/Texteditor.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import db from "~/plugins/firebaseInit.js";

export default {
  components: {
    ImageGallery,
  },
  layout: "admin",
  head() {
    return {
      title: "Galeri ekranı",
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
     selectedImg: ""
    };
  },

  methods: {
     emitSelectedImageFromGallery(data) {
      this.selectedImg = data;
    },
  },
  mounted() {
  },
};
</script>