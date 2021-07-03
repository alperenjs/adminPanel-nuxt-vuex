<template>
  <div class="card card-custom">
    <div class="card-header">
      <h3 class="card-title">Yeni Yazı</h3>
    </div>
    <!--begin::Form-->
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
          <div class="col-md-10 col-12">
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
    <button @click="addPost" class="btn btn-success mr-2">Ekle</button>
  </div>
</template>


<script>
import $ from "jquery";
import toastr from "~/static/plugins/global/toastr.min.js";
import Texteditor from "@/components/Texteditor.vue";
import UploadImage from "@/components/UploadImage.vue";
import db from "~/plugins/firebaseInit.js";

export default {
  components: {
    Texteditor,
    UploadImage,
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
      tagsContainer: ["virgül koyarak", "etiket ekleyiniz"],
      downloadedImgURL: "",
      title: "",
      blogText: "",
      seoDescription:""
    };
  },

  methods: {
  
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
      this.downloadedImgURL = data;
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
    addPost() {
      this.getTags();
      // Add a new document with a generated id.
      db.collection("posts")
        .add({
          title: this.title,
          blogText: this.blogText,
          downloadedImgURL: this.downloadedImgURL,
          seoDescription: this.seoDescription,
          tagsContainer: this.tagsContainer,
        })
        .then(toastr.success("Yazı başarıyla eklendi.", "Başarılı!"))
        .then(() => {
          this.$router.replace("/admin/blog");
        })
        .catch((error) => {
          toastr.warning(
            "Sayfayı yenileyin, eğer devam ederse destek isteyin",
            "Hata!"
          );
        });
    },
  },
  mounted() {
    this.runTagger();
  },
};
</script>