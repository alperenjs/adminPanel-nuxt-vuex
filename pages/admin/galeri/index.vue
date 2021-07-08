<template>
  <div>

    <Loader v-if="!isPageLoaded" />

    <div v-show="isPageLoaded" class="container-fluid">
      <div class="px-lg-5">
        <!-- For demo purpose -->
        <div class="upload-image-row row py-5">
          <span class="upload-image-text mx-5">Yeni Resim: </span>
          <UploadImage
            @uploadImage="emitUrlfromComponent($event)"
            ref="uploadImage"
          />
        </div>
        <div class="row py-5">
          <div class="col-lg-12 mx-auto">
            <div class="alert alert-custom alert-default" role="alert">
              <div class="alert-icon">
                <i class="flaticon-warning text-primary"></i>
              </div>
              <div class="alert-text">
                Resim dosyaları, site hızını etkileyen en önemli
                faktörlerdendir. Resimlerinizi yüklerken dosya boyutunu
                küçülttüğünüzden emin olunuz.
              </div>
            </div>
          </div>
        </div>
        <!-- End -->

        <div class="row">
          <!-- Gallery item -->
          <div
            :id="photo.id"
            v-for="photo in photos.slice().reverse()"
            :key="photo.id"
            class="col-xl-3 col-lg-4 col-md-6 mb-4 photo-div"
          >
            <div class="bg-white rounded shadow-sm">
              <img
                :id="`img` + photo.id"
                class="galeri-photo"
                :src="photo.img_url"
                alt="galeri foto"
              />
              <div class="p-4">
                <div
                  class="
                    d-flex
                    align-items-center
                    justify-content-between
                    rounded-pill
                    bg-light
                    px-3
                    py-2
                    mt-4
                  "
                >
                  <p class="small mb-0">
                    <i class="fa fa-picture-o mr-2"></i
                    ><span class="font-weight-bold"
                      >Boyut: {{ photo.size }}</span
                    >
                  </p>
                  <div
                    @click="deleteImg(photo.id, photo.key)"
                    class="
                      delete-btn
                      badge badge-danger
                      px-3
                      rounded-pill
                      font-weight-normal
                    "
                  >
                    Sil
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Loader from "@/components/Loader.vue"
import firebase from "firebase/app";
import $ from "jquery";
import toastr from "~/static/plugins/global/toastr.min.js";
import Texteditor from "@/components/Texteditor.vue";
import db from "~/plugins/firebaseInit.js";
import UploadImage from "@/components/UploadImage.vue";
import Swal from "sweetalert2";

export default {
  components: {
    UploadImage,
    Loader
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
      photos: [],
      isPageLoaded: false,
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
              size: doc.data().size,
            };
            this.photos.push(data);
            this.isPageLoaded = true;
          });
        });
    },
    deleteImg(hangiID, hangiKey) {
      Swal.fire({
        title: "Resim dosyasını silmek istediğinize emin misiniz?",
        showDenyButton: true,
        confirmButtonText: `Sil`,
        denyButtonText: `Vazgeç`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          db.collection("photos")
            .doc(`${hangiID}`)
            .delete()
            .then(() => {
              const storage = firebase.storage();
              var fileUrl = $("#img" + hangiID).attr("src");
              var fileRef = storage.refFromURL(fileUrl);
              // Delete the file using the delete() method
              fileRef
                .delete()
                .then(function () {})
                .catch(function (error) {
                  // Some Error occurred
                })
                .then($("#" + hangiID).hide("slow"));
            });
          toastr.success("Resim dosyası silindi.", "Başarılı!");
        } else if (result.isDenied) {
          toastr.warning("Resim dosyası silinmedi.", "Dikkat!");
        }
      });
    },
    emitUrlfromComponent(data) {
      this.photos.push({
        img_url: data,
      });
    },
  },
  mounted() {
    this.getPhotos();
  },
};
</script>

<style scoped>
.upload-image-row {
  display: flex;
  align-items: center;
  vertical-align: middle;
}
.display-4 {
  color: black;
}

.galeri-photo {
  width: 100%;
  height: 184px;
  object-fit: contain;
}
.delete-btn {
  cursor: pointer;
}
</style>