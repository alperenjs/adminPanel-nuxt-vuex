<script>
// import Header from "~/components/Header";
export default {
  middleware: ["check-auth", "auth"],
  component: {
    // Header,
  },
  head() {
    return {
      title: "layout headi",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
      bodyAttrs: {
        class:
          " header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading",
        id: "kt_body",
      },
      script: [
        {
          src: "plugins/global/plugins.bundle.js",
        },
        {
          src: "js/scripts.bundle.min.js",
        },
        {
          src: "js/settings.js",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "plugins/global/plugins.bundle.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "css/style.bundle.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "css/themes/layout/header/base/dark.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "css/themes/layout/header/menu/dark.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "css/themes/layout/brand/dark.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "css/themes/layout/aside/dark.css",
        },
           {
          rel: "stylesheet",
          type: "text/css",
          href: "css/custom/layout.css",
        },
      ],
    };
  },
  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/admin/auth");
    },
  },
};
</script>

<template>
  <div>
    <!--begin::Main-->
    <!--begin::Header Mobile-->
    <div
      id="kt_header_mobile"
      class="header-mobile align-items-center header-mobile-fixed"
    >
      <!--begin::Logo-->
      <a href="/">
        <img alt="Logo" src="~/assets/images/logo.png" />
      </a>
      <!--end::Logo-->
      <!--begin::Toolbar-->
      <div class="d-flex align-items-center">
        <!--begin::Aside Mobile Toggle-->
        <button
          class="btn p-0 burger-icon burger-icon-left"
          id="kt_aside_mobile_toggle"
        >
          <span></span>
        </button>
        <!--end::Aside Mobile Toggle-->
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Header Mobile-->
    <div class="d-flex flex-column flex-root">
      <!--begin::Page-->
      <div class="d-flex flex-row flex-column-fluid page">
        <!--begin::Aside-->
        <div
          class="aside aside-left aside-fixed d-flex flex-column flex-row-auto"
          id="kt_aside"
        >
          <!--begin::Brand-->
          <div class="brand flex-column-auto" id="kt_brand">
            <!--begin::Logo-->
            <a href="/" class="brand-logo">
              <img alt="Logo" src="~/assets/images/logo.png" />
            </a>
            <!--end::Logo-->
            <!--begin::Toggle-->
            <button class="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
              <span class="svg-icon svg-icon svg-icon-xl">
                <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-double-left.svg-->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <polygon points="0 0 24 0 24 24 0 24" />
                    <path
                      d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                      transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)"
                    />
                    <path
                      d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                      opacity="0.3"
                      transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)"
                    />
                  </g>
                </svg>
                <!--end::Svg Icon-->
              </span>
            </button>
            <!--end::Toolbar-->
          </div>
          <!--end::Brand-->
          <!--begin::Aside Menu-->
          <div
            class="aside-menu-wrapper flex-column-fluid"
            id="kt_aside_menu_wrapper"
          >
            <!--begin::Menu Container-->
            <div
              id="kt_aside_menu"
              class="aside-menu my-4"
              data-menu-vertical="1"
              data-menu-scroll="1"
              data-menu-dropdown-timeout="500"
            >
              <!--begin::Menu Nav-->
              <ul class="menu-nav">
                <li class="menu-section pt-0 mt-0">
                  <h4 class="menu-text">Kontroller</h4>
                  <i class="menu-icon ki ki-bold-more-hor icon-md"></i>
                </li>
                  <li class="menu-item" aria-haspopup="true">
                  <a href="index.html" class="menu-link">
                    <i class="menu-icon flaticon-home"></i>
                    <span class="menu-text">Ana Sayfa</span>
                  </a>
                </li>
                <li class="menu-item" aria-haspopup="true">
                  <a href="/" class="menu-link">
                    <div class="pulse pulse-primary mr">
                      <span class="svg-icon svg-icon-primary svg-icon-2x"
                        ><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\legacy\metronic\theme\html\demo1\dist/../src/media/svg/icons\Devices\LTE1.svg--><svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24" />
                            <path
                              d="M15.4508979,17.4029496 L14.1784978,15.8599014 C15.324501,14.9149052 16,13.5137472 16,12 C16,10.4912085 15.3289582,9.09418404 14.1893841,8.14910121 L15.466112,6.60963188 C17.0590936,7.93073905 18,9.88958759 18,12 C18,14.1173586 17.0528606,16.0819686 15.4508979,17.4029496 Z M18.0211112,20.4681628 L16.7438102,18.929169 C18.7927036,17.2286725 20,14.7140097 20,12 C20,9.28974232 18.7960666,6.77820732 16.7520315,5.07766256 L18.031149,3.54017812 C20.5271817,5.61676443 22,8.68922234 22,12 C22,15.3153667 20.523074,18.3916375 18.0211112,20.4681628 Z M8.54910207,17.4029496 C6.94713944,16.0819686 6,14.1173586 6,12 C6,9.88958759 6.94090645,7.93073905 8.53388797,6.60963188 L9.81061588,8.14910121 C8.67104182,9.09418404 8,10.4912085 8,12 C8,13.5137472 8.67549895,14.9149052 9.82150222,15.8599014 L8.54910207,17.4029496 Z M5.9788888,20.4681628 C3.47692603,18.3916375 2,15.3153667 2,12 C2,8.68922234 3.47281829,5.61676443 5.96885102,3.54017812 L7.24796852,5.07766256 C5.20393339,6.77820732 4,9.28974232 4,12 C4,14.7140097 5.20729644,17.2286725 7.25618985,18.929169 L5.9788888,20.4681628 Z"
                              fill="#000000"
                              fill-rule="nonzero"
                              opacity="0.3"
                            />
                            <circle fill="#000000" cx="12" cy="12" r="2" />
                          </g></svg
                        ><!--end::Svg Icon--></span
                      >
                      <span class="pulse-ring"></span>
                    </div>
                    <span class="menu-text ml-4">Site Önizleme</span>
                  </a>
                </li>
                <li class="menu-item">
                      <a
                          class="menu-link"
                          @click="onLogout"
                        >
                        <span class="svg-icon svg-icon-primary svg-icon-2x"><svg class="red" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none"  stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
        <path d="M14.5,11 C15.0522847,11 15.5,11.4477153 15.5,12 L15.5,15 C15.5,15.5522847 15.0522847,16 14.5,16 L9.5,16 C8.94771525,16 8.5,15.5522847 8.5,15 L8.5,12 C8.5,11.4477153 8.94771525,11 9.5,11 L9.5,10.5 C9.5,9.11928813 10.6192881,8 12,8 C13.3807119,8 14.5,9.11928813 14.5,10.5 L14.5,11 Z M12,9 C11.1715729,9 10.5,9.67157288 10.5,10.5 L10.5,11 L13.5,11 L13.5,10.5 C13.5,9.67157288 12.8284271,9 12,9 Z" fill="#000000"/>
    </g>
</svg><!--end::Svg Icon--></span>
                          <span class="menu-text ml-4">Oturumu Kapat</span>
                        </a>
                  <!-- <button class="btn btn-danger" @click="onLogout">
                    Çıkış Yap
                  </button> -->
                </li>
                <li class="menu-section">
                  <h4 class="menu-text">İçerik Yönetimi</h4>
                  <i class="menu-icon ki ki-bold-more-hor icon-md"></i>
                </li>
                <li
                  class="menu-item menu-item-submenu"
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <a href="javascript:;" class="menu-link menu-toggle">
                    <i class="menu-icon flaticon-web"></i>
                    <span class="menu-text">CRUD</span>
                    <i class="menu-arrow"></i>
                  </a>
                  <div class="menu-submenu">
                    <i class="menu-arrow"></i>
                    <ul class="menu-subnav">
                      <li
                        class="menu-item menu-item-parent"
                        aria-haspopup="true"
                      >
                        <span class="menu-link">
                          <span class="menu-text">Örnek 1 - 1</span>
                        </span>
                      </li>
                      <li
                        class="menu-item menu-item-submenu"
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                      >
                        <a href="javascript:;" class="menu-link menu-toggle">
                          <i class="menu-bullet menu-bullet-line">
                            <span></span>
                          </i>
                          <span class="menu-text">Örnek 1 - 2</span>
                          <span class="menu-label">
                            <span class="label label-rounded label-primary"
                              >1</span
                            >
                          </span>
                          <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu">
                          <i class="menu-arrow"></i>
                          <ul class="menu-subnav">
                            <li class="menu-item" aria-haspopup="true">
                               <nuxt-link to="/" class="menu-link">
                                      <i class="menu-bullet menu-bullet-dot">
                                  <span></span>
                                </i>
                                <span class="menu-text">1-2-1</span>
                            </nuxt-link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="menu-section">
                  <h4 class="menu-text">Kısım</h4>
                  <i class="menu-icon ki ki-bold-more-hor icon-md"></i>
                </li>
                <li
                  class="menu-item menu-item-submenu"
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                >
                  <a href="javascript:;" class="menu-link menu-toggle">
                    <i class="menu-icon flaticon-graphic"></i>
                    <span class="menu-text">Themes</span>
                    <i class="menu-arrow"></i>
                  </a>
                  <div class="menu-submenu">
                    <i class="menu-arrow"></i>
                    <ul class="menu-subnav">
                      <li
                        class="menu-item menu-item-parent"
                        aria-haspopup="true"
                      >
                        <span class="menu-link">
                          <span class="menu-text">Themes</span>
                        </span>
                      </li>
                      <li class="menu-item" aria-haspopup="true">
                        <a
                          href="layout/themes/aside-light.html"
                          class="menu-link"
                        >
                          <i class="menu-bullet menu-bullet-dot">
                            <span></span>
                          </i>
                          <span class="menu-text">Light Aside</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
  
              </ul>
              <!--end::Menu Nav-->
            </div>
            <!--end::Menu Container-->
          </div>
          <!--end::Aside Menu-->
        </div>
        <!--end::Aside-->
        <!--begin::Wrapper-->
        <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
          <!--begin::Content-->
          <div
            class="content d-flex flex-column flex-column-fluid"
            id="kt_content"
          >
            <!--begin::Entry-->
            <div class="d-flex flex-column-fluid">
              <!--begin::Container-->
              <div class="container">
                <Nuxt />
              </div>
              <!--end::Container-->
            </div>
            <!--end::Entry-->
          </div>
          <!--end::Content-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Page-->
    </div>
    <!--end::Main-->
    <!-- <Header /> -->
  </div>
</template>

