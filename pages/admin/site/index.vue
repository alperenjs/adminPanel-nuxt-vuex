<template>
  <div class="card card-custom">
    <div class="card-header">
      <h3 class="card-title">Site Ayarları</h3>
    </div>
    <!--begin::Form-->
    <div class="card-body">
      <div class="card-body">
        <div class="form-group row">
          <div class="col-lg-6">
            <label>Site Başlığı:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ana sayfa site başlığı"
              v-model="pageTitle"
            />
          </div>
          <div class="col-lg-6">
            <label>Site URL:</label>
            <input
              v-model="siteLink"
              type="text"
              class="form-control"
              placeholder="https://..."
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-12">
            <label>Site Etiketleri SEO:</label>
            <div class="tagger-container">
              <ul id="tags-input" class="tags-input">
                <li class="tags existed"
                v-for="item in tagsContainer"
                    :key="item"
                > {{ item }}<i class="fa fa-times"></i></li>
                <li class="tags-new">
                  <input type="text" />
                </li>
              </ul>
            </div>
            <span class="form-text text-muted"
              >İlgili etiketler, içeriğin Google tarafından öne çıkarılmasında
              yardımcı olur.</span
            >
          </div>
        </div>
        <div class="form-group row">
          <div class="col-12">
            <label>Site Açıklama SEO:</label>
            <div class="input-group">
              <input
                v-model="seoDescription"
                type="text"
                class="form-control"
                placeholder=""
              />
            </div>
            <span class="form-text text-muted"
              >Sitenizin, Google aramalarda ilgili ve doğru tanım ile
              bulunmasına yardımcı olacak GENEL açıklama metni.</span
            >
          </div>
        </div>
        <div class="form-group row">
          <img
            v-show="downloadedImgURL != null"
            style="max-height: 175px; max-width: 175px"
            class="current-blog-photo"
            :src="downloadedImgURL"
            alt="firma logo"
          />
          <div class="col-6">
            <label>Firma Logo:</label>
            <div class="input-group">
              <UploadImage
                @uploadImage="emitUrlfromComponent($event)"
                ref="uploadImage"
              />
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-lg-6">
            <label>Firma Adı:</label>
            <input
              v-model="firmName"
              type="text"
              class="form-control"
              placeholder="Firme veya şahıs adı..."
            />
          </div>
          <div class="col-lg-6">
            <label>Telefon:</label>
            <input
              v-model="firmTel"
              type="tel"
              class="form-control"
              placeholder="İletişim numarası"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-12">
            <label for="addressTextArea"
              >Firma Adres: <span class="text-danger"></span
            ></label>
            <textarea
              v-model="firmAddress"
              class="form-control"
              id="addressTextArea"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-lg-6">
            <label>Whatsapp Direkt Mesaj:</label>
            <input
              v-model="whatsappNo"
              type="tel"
              class="form-control"
              placeholder="905.."
            />
            <span class="form-text text-muted"
              >Kullanmak <span class="orangered">istemiyorsanız</span> boş
              bırakınız. Eğer burayı doldurursanız, sitenizin ana sayfasında her
              zaman gözüken bir WhatsApp direkt mesaj ikonu olacaktır.
              <span class="blue">
                Kullanıcı tıkladığında sizinle sohbet otomatik olarak başlayacak
                ve isterse mesaj gönderecektir.</span
              >
              Numara 90 ile başlamalıdır.
              <span class="orangered"
                >Yanlış numara girilmesi durumunda sorumluluk şahsınıza
                aittir.</span
              >
            </span>
          </div>
          <div class="col-lg-6">
            <label>E-Posta:</label>
            <input
              v-model="firmEmail"
              type="email"
              class="form-control"
              placeholder="İletişim numarası"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-12">
            <label for="googleAnalyticsTextArea"
              >Google Analytics: <span class="text-danger"></span
            ></label>
            <textarea
              v-model="googleAnalytics"
              class="form-control"
              id="googleAnalyticsTextArea"
              rows="3"
              placeholder="<script> ..."
            ></textarea>
            <span class="form-text text-muted"
              >Site verilerini Google aracılığı ile ölçmek için gerekli kod.
              Bilginiz yok ise değişiklik yapmayınız veya servis sağlayıcınıza
              başvurunuz.</span
            >
          </div>
        </div>
        <div class="form-group row">
          <div class="col-lg-6">
            <label>Facebook Sayfa URL:</label>
            <input
              v-model="urlFacebook"
              type="text"
              class="form-control"
              placeholder="https://www.facebook.com/"
            />
          </div>
          <div class="col-lg-6">
            <label>Twitter Sayfa URL:</label>
            <input
              v-model="urlTwitter"
              type="text"
              class="form-control"
              placeholder="https://twitter.com/"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-lg-6">
            <label>Instagram Sayfa URL:</label>
            <input
              v-model="urlInstagram"
              type="text"
              class="form-control"
              placeholder="https://instagram.com/"
            />
          </div>
          <div class="col-lg-6">
            <label>YouTube Sayfa URL:</label>
            <input
              v-model="urlYoutube"
              type="text"
              class="form-control"
              placeholder="https://www.youtube.com/"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-lg-6">
            <label>Pinterest Sayfa URL:</label>
            <input
              v-model="urlPinterest"
              type="text"
              class="form-control"
              placeholder="https://tr.pinterest.com/"
            />
          </div>
          <div class="col-lg-6">
            <label>TikTok Sayfa URL:</label>
            <input
              v-model="urlTiktok"
              type="text"
              class="form-control"
              placeholder="https://www.tiktok.com/?lang=tr-TR"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-12">
            <label for="copyrightTextArea"
              >Copyright Metni: <span class="text-danger"></span
            ></label>
            <textarea
              v-model="copyrightText"
              class="form-control"
              id="copyrightTextArea"
              rows="3"
            >
Copyright © 2021. Her Hakkı Saklıdır. Sitemizin herhangi bir şekilde kopyalanması, çoğaltılması ve dağıtılması halinde yasal haklarımız işletilecektir.</textarea
            >
          </div>
        </div>
      </div>

      <div class="card-footer">
        <div class="row">
          <div class="col-12">
            <button
              @click="updateSettings"
              type="reset"
              class="btn btn-primary w-100"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
import toastr from "~/static/plugins/global/toastr.min.js";
import UploadImage from "@/components/UploadImage.vue";
import db from "~/plugins/firebaseInit.js";

export default {
  layout: "admin",
  head() {
    return {
      title: "Site Ayarları",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Alperen Sözen",
        },
      ],
    };
  },
  components: {
    UploadImage,
  },
  data() {
    return {
      downloadedImgURL: null,
      pageTitle: "",
      siteLink: "",
      tagsContainer: [],
      seoDescription: "",
      firmName: "",
      firmTel: "",
      firmAddress: "",
      whatsappNo: "",
      firmEmail: "",
      googleAnalytics: "",
      copyrightText: "",
      urlFacebook: "",
      urlInstagram: "",
      urlTwitter: "",
      urlYoutube: "",
      urlTiktok: "",
      urlPinterest: "",
    };
  },

  methods: {
    getTags() {
      let self = this;
      self.tagsContainer = [];
      let listItems = $("#tags-input li.new-added");
      let alreadyExisteds = $("#tags-input li.existed");
      alreadyExisteds.each(function (idx, li) {
        let product = $(li);
        self.tagsContainer.push($.trim(product.text()));
      });
      listItems.each(function (idx, li) {
        let product = $(li);
        self.tagsContainer.push(product.text());
        product.removeClass("new-added").addClass("existed");
      });
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
    emitUrlfromComponent(data) {
      this.downloadedImgURL = data;
    },
    getSettings() {
      var docRef = db.collection("siteSettings").doc("iddocforsitesettings");
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.downloadedImgURL = doc.data().downloadedImgURL;
            this.pageTitle = doc.data().pageTitle;
            this.siteLink = doc.data().siteLink;
            this.tagsContainer = doc.data().tagsContainer;
            this.seoDescription = doc.data().seoDescription;
            this.firmName = doc.data().firmName;
            this.firmTel = doc.data().firmTel;
            this.firmAddress = doc.data().firmAddress;
            this.whatsappNo = doc.data().whatsappNo;
            this.firmEmail = doc.data().firmEmail;
            this.googleAnalytics = doc.data().googleAnalytics;
            this.copyrightText = doc.data().copyrightText;
            this.urlFacebook = doc.data().urlFacebook;
            this.urlInstagram = doc.data().urlInstagram;
            this.urlTwitter = doc.data().urlTwitter;
            this.urlYoutube = doc.data().urlYoutube;
            this.urlTiktok = doc.data().urlTiktok;
            this.urlPinterest = doc.data().urlPinterest;
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    updateSettings() {
       this.getTags();
      db.collection("siteSettings")
        .doc("iddocforsitesettings")
        .update({
          downloadedImgURL: this.downloadedImgURL,
          pageTitle: this.pageTitle,
          siteLink: this.siteLink,
          tagsContainer: this.tagsContainer,
          seoDescription: this.seoDescription,
          firmName: this.firmName,
          firmTel: this.firmTel,
          firmAddress: this.firmAddress,
          whatsappNo: this.whatsappNo,
          firmEmail: this.firmEmail,
          googleAnalytics: this.googleAnalytics,
          copyrightText: this.copyrightText,
          urlFacebook: this.urlFacebook,
          urlInstagram: this.urlInstagram,
          urlTwitter: this.urlTwitter,
          urlYoutube: this.urlYoutube,
          urlTiktok: this.urlTiktok,
          urlPinterest: this.urlPinterest,
        })
        .then(toastr.success("Güncelleme tamamlandı.", "Başarılı!"))
        .catch((error) => {
          toastr.warning(
            "Sayfayı yenileyin, eğer hata devam ederse destek isteyin",
            "Hata!"
          );
        });
    },
  },
  created() {
  },
  mounted() {
    this.runTagger();
    this.getSettings();
  },
};
</script>

<style scoped>
.orangered {
  color: orangered;
}
.blue {
  color: rgb(0, 110, 255);
}
</style>