<template>
  <div id="app">
    <button @click="updatedContent">printOut</button>
    <vue-editor v-model="htmlForEditor"></vue-editor>
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

  methods: {
    setEditorContent() {
      //veriyi sonradan çekip mounted ile editöre basıyor
      this.htmlForEditor = "<h1>Html For Editor</h1>";
    },
    updatedContent() {
      console.log(this.htmlForEditor);
    },
  },
  mounted() {
    this.setEditorContent();
  },
};
</script>