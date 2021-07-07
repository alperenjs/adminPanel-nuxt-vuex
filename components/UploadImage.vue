<template>
  <div style="position:relative;">
    <!-- <div v-if="picture" class="row">
      <img :src="picture" class="uploaded-image-preview" />
    </div> -->
    <label class="btn btn-success" for="upload-photo">{{btnText || "Cihazımdan Seç"}}</label>
    <input
    id="upload-photo"
      class="form-control btn  btn-success"
      @change="previewImage"
      type="file"
      accept="image/*"
    />
    <p v-show="loading">İşleniyor: {{ uploadValue.toFixed() + "%" }}</p>

    <button v-if="imageData && !loading" @click="onUpload">Yükle</button>
  </div>
</template>

<script>
import $ from "jquery"
import toastr from "~/static/plugins/global/toastr.min.js";
import firebase from "firebase/app";
import "firebase/storage"; // <----
import db from "~/plugins/firebaseInit.js";

export default {
  name: "UploadImage",
  props: ['btnText'],
  data() {
    return {
      uploadValue: 0,
      picture: null,
      imageData: null,
      loading: false,
      size:""
    };
  },
  methods: {
    previewImage(event, img) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
      this.size = event.target.files[0].size / 1000 + " kb";
      this.onUpload();
    },
    onUpload() {
      let dateID = Date.now();
      this.loading = true;
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${dateID}${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `stage_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
            this.downloadedImgURL = url;
            this.addToPhotos(url);
            this.passEvent(this.picture);
          });
        }
      );
    },
    addToPhotos(newimg) {
      db.collection("photos")
        .add({
          img_url: newimg,
          size: this.size
        }).then($(".current-blog-photo").hide())
        .then(toastr.success("Fotoğraf başarıyla eklendi.", "Başarılı!"))
        .catch((error) => {
          toastr.warning(
            "Sayfayı yenileyin, eğer devam ederse destek isteyin",
            "Fotoğraf Yüklenirken Hata!"
          );
        });
    },
    passEvent(data) {
      this.$emit("uploadImage", data);
    },
  },
};
</script>

<style scoped>
#upload-photo {
  opacity: 0;
cursor: pointer;
  position: absolute;
  z-index: -1;
}
</style>