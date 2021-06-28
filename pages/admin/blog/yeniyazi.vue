<template>
<div class="card card-custom">
    <UploadImage/>
 <div class="card-header">
  <h3 class="card-title">
   Yeni Yazı
  </h3>
 </div>
 <!--begin::Form-->
 <form>
  <div class="card-body">
   <div class="form-group mb-8">
    <div class="alert alert-custom alert-default" role="alert">
     <div class="alert-icon"><i class="flaticon-warning text-primary"></i></div>
     <div class="alert-text">
      Yüklediğiniz resim dosyalarının boyutunun küçük olmasına özen gösteriniz.
     </div>
    </div>
   </div>
   <div class="form-group row">
    <label  class="col-2 col-form-label">Başlık</label>
    <div class="col-10">
     <input class="form-control" type="text" value="Yeni Bir Blog!" id="baslik"/>
    </div>
   </div>
   <div class="form-group row">
    <label for="example-email-input" class="col-2 col-form-label">Metin</label>
    <div class="col-10">
   <Texteditor/>
    </div>
   </div>

  </div>
  <div class="card-footer">
   <div class="row">
    <div class="col-2">
    </div>
    <div class="col-10">
     <button type="reset" class="btn btn-success mr-2">Submit</button>
     <button type="reset" class="btn btn-secondary">Cancel</button>
    </div>
   </div>
  </div>
 </form>
</div>
</template>


<script>


import Texteditor from "@/components/Texteditor.vue";
import UploadImage from "@/components/UploadImage.vue";

export default {
  components: {
    Texteditor,
    UploadImage
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
    return {};
  },

  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/admin/auth");
    },
  },
  mounted() {},
};
</script>