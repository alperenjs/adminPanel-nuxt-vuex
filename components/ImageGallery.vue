<template>
 <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Galeri'den Seç
    </button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Galeri</h5>
            <button type="button" class="btn btn-outline-danger btn-close" data-bs-dismiss="modal" aria-label="Close">x</button>
        </div>
        <div class="modal-body gallery-modal-body">
           <div class="row">
               <div @click="selectImg($event)" v-for="photo in photos" :key="photo.key" class="col single-image-col">
                   <img style="max-width:200px; max-height:200px;"  :src="photo.img_url" alt="galeri fotoğrafı">
               </div>
           </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Vazgeç</button>
            <button @click="selectImageButton" type="button" class="btn btn-primary">Seçileni Al</button>
        </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery"
import toastr from "~/static/plugins/global/toastr.min.js";
import firebase from "firebase/app";
import "firebase/storage"; // <----
import db from "~/plugins/firebaseInit.js";

export default {
  name: "ImageGallery",
  data() {
    return {
        photos:[],
        selectedURL: ""
    };
  },
  methods: {
    getPhotos() {
      db.collection("photos")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = {
              id: doc.id,
              img_url: doc.data().img_url,
            };
            this.photos.push(data);
          });
        });
    },
    selectImg(e){
        $(".single-image-col").removeClass("active");
        $(e.target).closest(".single-image-col").addClass("active");
    this.selectedURL  = ($(e.target).closest('img').attr('src'));
    },
    passSelectedImageUrl(data) {
      this.$emit("selectImage", data);
    },
    selectImageButton(){
      this.passSelectedImageUrl(this.selectedURL);
    }
  },
  created(){
      this.getPhotos()
  }
};
</script>

