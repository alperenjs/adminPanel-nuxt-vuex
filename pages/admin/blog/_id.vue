<template>
<div>
  <div v-if="!isPageLoaded"  class="loading">
	<span></span>
	<span></span>
	<span></span>
	<span></span>
</div>

  <div  v-show="isPageLoaded" class="card card-custom">
    <div class="card-header">
      <h3 class="card-title">Yeni Yazı</h3>
    </div>
    <!--begin::Form-->
     
      <div>
    <form>
      <div class="card-body">
        <div class="form-group mb-8">
          <div class="alert alert-custom alert-default" role="alert">
            <div class="alert-icon">
              <i class="flaticon-warning text-primary"></i>
            </div>
            <div class="alert-text">
              Yüksek performans için resim dosyalarınızı optimize etmeyi
              unutmayın
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2 col-12 col-form-label">Kapak Resmi</label>
          <div class="col-md-3 col-12">
          <img v-show="downloadedImgURL != null" style="max-height:300px; max-width:300px" class="current-blog-photo" :src="downloadedImgURL" alt="Blog Kapak Fotoğrafı">
          <button v-show="downloadedImgURL != null" @click="removeImage" class="btn btn-danger delete-blog-cover-pic" style="display:none">Resim Kaldır</button>
        </div>
      </div>
          <div class="form-group row">
            <div class="col-md-2"></div>
                      <div class="col-md-5 col-6">
              <span class="form-text text-muted">Daha önce yüklediğiniz resimlerden seçin.</span>
            <ImageGallery
            @selectImage="emitSelectedImageFromGallery($event)"
           ref="selectImage"
            />
          </div>
          <div class="col-md-5 col-6">
              <span class="form-text text-muted">Bilgisayarınızdan yeni resim yükleyin.</span>
            <UploadImage
              @uploadImage="emitUrlfromComponent($event)"
              ref="uploadImage"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2 col-12 col-form-label">Başlık</label>
          <div class="col-md-10 col-12">
            <input
              class="form-control"
              type="text"
              value="Yeni Bir Blog!"
              id="baslik"
              v-model="title"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="example-email-input" class="col-md-2 col-12 col-form-label"
            >Metin</label          >
          <div class="col-md-10 col-12">
            <Texteditor
              @uploadText="emitTextfromComponent($event)"
             />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2 col-12 col-form-label">SEO için Etiketler</label>
          <div class="col-md-10 col-12 tagger-container">
            <ul id="tags-input" class="tags-input">
               <li class="tags existed" v-for="item in tagsContainer" :key="item">
                      {{ item }}<i class="fa fa-times"></i>
               </li>
              <li class="tags-new">
                <input type="text"/>
              </li>
            </ul>
              <span class="form-text text-muted">İlgili etiketler, içeriğin Google tarafından öne çıkarılmasında yardımcı olur.</span>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-2">
            <label for="exampleTextarea">SEO Sayfa Açıklaması</label>
          </div>
          <div class="col-md-10 col-12">
            <div class="form-group mb-1">
              <textarea
                class="form-control"
                id="exampleTextarea"
                rows="3"
                v-model="seoDescription"
              ></textarea>
            </div>
              <span class="form-text text-muted">Google aramalarda, sayfa başlığının altında gözükecek olan bilgilendirici açıklama.</span>
          </div>
        </div>
      </div>
    </form>
    <button @click="updatePost(blogID)" class="btn btn-success mr-2 w-100">Güncelle</button>
    </div>
  </div>
  </div>
</template>


<script>
import $ from "jquery";
import toastr from "~/static/plugins/global/toastr.min.js";
import db from "~/plugins/firebaseInit.js";
import Texteditor from "@/components/Texteditor.vue";
import UploadImage from "@/components/UploadImage.vue";
import ImageGallery from "@/components/ImageGallery.vue";

export default {
  components: {
    Texteditor,
    UploadImage,
    ImageGallery
  },
  layout: "admin",
  head() {
    return {
      title: "Blog ekranı component",
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
      isPageLoaded: false,
      blogId: "",
      tagsContainer: ["ali", "veli", "mehmet"],
      downloadedImgURL: "",
      title: "",
      blogText: "",
      seoDescription:"",
    };
  },

  methods: {
    getSinglePost(hangiID) {
      db.collection("posts").doc(`${hangiID}`)
        .get()
        .then((querySnapshot) => {
          return querySnapshot.data()
        }).then(veri => {
            this.title = veri.title;
            this.tagsContainer = veri.tagsContainer;
            this.seoDescription = veri.seoDescription;
            this.downloadedImgURL = veri.downloadedImgURL;
            this.blogText = veri.blogText;
            $(".ql-editor").html(this.blogText)
        }).then(() => this.isPageLoaded = true);
    },
    removeImage(e){
      e.preventDefault()
      this.downloadedImgURL = null
    },
    getTags() {
      let self = this;
      self.tagsContainer = []
      let listItems = $("#tags-input li.new-added");
      let alreadyExisteds = $("#tags-input li.existed");
      alreadyExisteds.each(function (idx, li){
      let product = $(li);
        self.tagsContainer.push($.trim(product.text()));
      })
      listItems.each(function (idx, li) {
        let product = $(li);
        self.tagsContainer.push(product.text());
        product.removeClass("new-added").addClass("existed")
      });

    },

    emitUrlfromComponent(data) {
      this.downloadedImgURL = null;
      setTimeout(() => {
        this.downloadedImgURL = data;
      }, 500);
    },

    emitTextfromComponent(data){
      this.blogText = data;
    },

    runTagger() {
      function existingTag(text) {
        var existing = false,
          text = text.toLowerCase();

        $(".tags").each(function () {
          if ($(this).text().toLowerCase() == text) {
            existing = true;
            return "";
          }
        });

        return existing;
      }

      $(function () {
        $(".tags-new input").focus();

        $(".tags-new input").keyup(function () {
          var tag = $(this).val().trim(),
            length = tag.length;

          if (tag.charAt(length - 1) == "," && tag != ",") {
            tag = tag.substring(0, length - 1);

            if (!existingTag(tag)) {
              $(
                '<li class="tags new-added"><span>' +
                  tag +
                  '</span><i class="fa fa-times"></i></i></li>'
              ).insertBefore($(".tags-new"));
              $(this).val("");
            } else {
              $(this).val(tag);
            }
          }
        });

        $(document).on("click", ".tags i", function () {
          $(this).parent("li").remove();
        });
      });
    },

    updatePost(hangiID) {
      db.collection("posts")
        .doc(`${hangiID}`)
        .update({
          tagsContainer: this.tagsContainer,
          downloadedImgURL:this.downloadedImgURL,
          title: this.title,
          blogText: this.blogText,
          seoDescription: this.seoDescription,
        })
        .then(toastr.success("Güncelleme başarıyla tamamlandı.", "Başarılı!"))
        .catch((error) => {
          toastr.warning(
            "Yazı güncellenemedi, eğer devam ederse destek isteyiniz.",
            "Hata!"
          );
        });
    },
    showDeletePicBtn(){
        if($(".current-blog-photo")){
            $(".delete-blog-cover-pic").show()
        }
    },
      emitSelectedImageFromGallery(data) {
      this.downloadedImgURL = data;
    },
  },
  created(){
     this.blogID = location.pathname.split("/")[3];
  },
  mounted() {
     this.runTagger();
     this.getSinglePost(this.blogID)
     this.showDeletePicBtn()
  },
};
</script>