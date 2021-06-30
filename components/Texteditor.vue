<template>
  <div id="app">
    <vue-editor  @keyup="updatedContent" v-model="htmlForEditor"></vue-editor>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
  components: {
    VueEditor,
  },

  data() {
    return {
      htmlForEditor: null,
    };
  },
    watch: {   // vuex'deki değerleri dinliyor, değiştiği an event fırlatıyoruz
      htmlForEditor: function (val) {
        this.passText(this.htmlForEditor)
      },
   
    },
  methods: {
    setEditorContent() {
      //veriyi sonradan çekip mounted ile editöre basıyor
      this.htmlForEditor = "<h1>Html For Editor</h1>";
    },
    updatedContent() {
    },
    passText(data) {
      this.$emit("uploadText", data);
    },
  },
  mounted() {
    this.setEditorContent();
  },
};
</script>