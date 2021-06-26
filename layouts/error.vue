<template>
 		<!--begin::Main-->
		<div id="error" class="d-flex flex-column flex-root">
			<!--begin::Error-->
			<div class="error error-6 d-flex flex-row-fluid bgi-size-cover bgi-position-center" style="background-image: url(/images/errorBG.jpg);">
				<!--begin::Content-->
				<div class="d-flex flex-column flex-row-fluid text-center">
					<h1 class="error-title font-weight-boldest text-white mb-12" style="margin-top: 12rem;">Oops...</h1>
					<p class="display-4 font-weight-bold text-white">Yanlış bir url girmiş ya da bazı şeyler ters gitmiş olabilir. <br>
           Sorun devam ederse lütfen yetkili kişiye başvurunuz.</p>
				</div>
				<!--end::Content-->
			</div>
			<!--end::Error-->
		</div>
		<!--end::Main-->
</template>

<style scoped>
#error{
  height: 100vh;
}
</style>

<script>

export default {
  head() {
    return {
      layout: "empty",
      title: "Hata Sayfası",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
     props: ['error'],
      //  <h1 v-if="error.statusCode === 404">Page not found</h1>
    };
  }
};
</script>
