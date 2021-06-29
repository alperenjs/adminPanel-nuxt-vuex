<template>
  <div>
    <div v-if="picture" class="row">
      <img :src="picture" style="height: 200px" />
    </div>
    <input
      class="form-control"
      @change="previewImage"
      type="file"
      accept="image/*"
    />
    <p v-show="loading">Progress: {{ uploadValue.toFixed() + "%" }}</p>

    <button v-if="imageData && !loading" @click="onUpload">Yükle</button>
  </div>
</template>

<script>
import toastr from "~/static/plugins/global/toastr.min.js";
import firebase from "firebase/app";
import "firebase/storage"; // <----
import db from "~/plugins/firebaseInit.js";

export default {
  name: "UploadImage",
  data() {
    return {
      uploadValue: 0,
      picture: null,
      imageData: null,
      loading: false,
    };
  },
  methods: {
    previewImage(event, img) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },
    onUpload() {
      this.loading = true;
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
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
        })
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

