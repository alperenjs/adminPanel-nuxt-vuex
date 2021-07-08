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
            />
          </div>
          <div class="col-lg-6">
            <label>Site URL:</label>
            <input type="text" class="form-control" placeholder="https://..." />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-12">
            <label>Site Etiketleri SEO:</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your address"
              />
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
              <input type="text" class="form-control" placeholder="" />
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
              type="text"
              class="form-control"
              placeholder="Firme veya şahıs adı..."
            />
          </div>
          <div class="col-lg-6">
            <label>Telefon:</label>
            <input
              type="tel"
              class="form-control"
              placeholder="İletişim numarası"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-lg-6">
            <label>Whatsapp Direkt Mesaj:</label>
            <input type="tel" class="form-control" placeholder="905.." />
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
              type="text"
              class="form-control"
              placeholder="https://www.facebook.com/"
            />
          </div>
          <div class="col-lg-6">
            <label>Twitter Sayfa URL:</label>
            <input
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
              type="text"
              class="form-control"
              placeholder="https://instagram.com/"
            />
          </div>
          <div class="col-lg-6">
            <label>YouTube Sayfa URL:</label>
            <input
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
              type="text"
              class="form-control"
              placeholder="https://tr.pinterest.com/"
            />
          </div>
          <div class="col-lg-6">
            <label>TikTok Sayfa URL:</label>
            <input
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
              class="form-control"
              id="copyrightTextArea"
              rows="3"
            >Copyright © 2021. Her Hakkı Saklıdır. Sitemizin herhangi bir şekilde kopyalanması, çoğaltılması ve dağıtılması halinde yasal haklarımız işletilecektir.</textarea>
          </div>
   
        </div>
      </div>

      <div class="card-footer">
        <div class="row">
          <div class="col-lg-6">
            <button type="reset" class="btn btn-primary mr-2">Save</button>
            <button type="reset" class="btn btn-secondary">Cancel</button>
          </div>
          <div class="col-lg-6 text-lg-right">
            <button type="reset" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
import toastr from "~/static/plugins/global/toastr.min.js";
import Texteditor from "@/components/Texteditor.vue";
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
      downloadedFavIcon: null,
    };
  },

  methods: {
    emitUrlfromComponent(data) {
      this.downloadedImgURL = data;
    },
    emitUrlForFAVIcon(data) {
      this.downloadedFavIcon = data;
    },
  },
  mounted() {},
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