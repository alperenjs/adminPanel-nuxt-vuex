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
          <label class="col-2 col-form-label">Kapak Resmi</label>
          <div class="col-10">
            <UploadImage ref="uploadImage" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-2 col-form-label">Başlık</label>
          <div class="col-10">
            <input
              class="form-control"
              type="text"
              value="Yeni Bir Blog!"
              id="baslik"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="example-email-input" class="col-2 col-form-label"
            >Metin</label
          >
          <div class="col-10">
            <Texteditor />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-2 col-form-label">SEO için Etiketler</label>
          <div id="wrapper" class="col-10">
            <ul id="tags-input" class="tags-input">
              <li class="tags">My tag<i class="fa fa-times"></i></li>
              <li class="tags">My tag2<i class="fa fa-times"></i></li>
              <li class="tags">My tag3<i class="fa fa-times"></i></li>
              <li class="tags">My tag4<i class="fa fa-times"></i></li>
              <li class="tags-new">
                <input type="text" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-2">
    <label for="exampleTextarea">SEO Sayfa Açıklaması</label>
          </div>
          <div class="col-10">
            <div class="form-group mb-1">
    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
   </div>
          </div>
        </div>
      </div>
    </form>
    <button @click="customSubmit" class="btn btn-success mr-2">Submit</button>
  </div>
</template>


<script>
import $ from "jquery";
import toastr from "~/static/plugins/global/toastr.min.js";
import Texteditor from "@/components/Texteditor.vue";
import UploadImage from "@/components/UploadImage.vue";

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
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
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
      tagsContainer: ([] = []),
    };
  },

  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/admin/auth");
    },
    customSubmit(e) {
      e.preventDefault();
      var uploadImageComponent = this.$refs.uploadImage;
      uploadImageComponent.onUpload();
    },
    test() {
      toastr.info("Are you the 6 fingered man?");
    },
    getTags() {
      let self = this;
      let listItems = $("#tags-input li");
      listItems.each(function (idx, li) {
        let product = $(li);
        self.tagsContainer.push(product.text());
      });
    },
    runTagger(){
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
              '<li class="tags"><span>' +
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
    }
  },
  mounted() {
    this.runTagger();
    this.getTags();
  },
};
</script>