<template>
  <div class="card card-custom">
    <div class="card-header">
      <h3 class="card-title">Blog Yazıları</h3>
    </div>
    <!--begin::Form-->
    <div class="card-body">
      <table id="example" class="display datatables" style="width: 100%">
        <thead>
          <tr>
            <th>Sıra</th>
            <th>Başlık</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in allPosts" :key="post.id">
            <td>{{allPosts.indexOf(post) + 1}}</td>
            <td class="blogText">
             {{post.title}}
            </td>
            <td>
              <span style="overflow: visible; position: relative">
                <div class="dropdown dropdown-inline">
                  <a
                    href="javascript:;"
                    class="btn btn-sm btn-clean btn-icon mr-2"
                    data-toggle="dropdown"
                  >
                    <span class="svg-icon svg-icon-md">
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
                          <rect x="0" y="0" width="24" height="24"></rect>
                          <path
                            d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                            fill="#000000"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </div>
                <a
                  href="javascript:;"
                  class="btn btn-sm btn-clean btn-icon mr-2"
                  title="Edit details"
                >
                  <span class="svg-icon svg-icon-md">
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
                        <rect x="0" y="0" width="24" height="24"></rect>
                        <path
                          d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                          fill="#000000"
                          fill-rule="nonzero"
                          transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                        ></path>
                        <rect
                          fill="#000000"
                          opacity="0.3"
                          x="5"
                          y="20"
                          width="15"
                          height="2"
                          rx="1"
                        ></rect>
                      </g>
                    </svg>
                  </span>
                </a>
                <a
                  href="javascript:;"
                  class="btn btn-sm btn-clean btn-delete btn-icon"
                  title="Delete"
                >
                  <span class="svg-icon svg-icon-md">
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
                        <rect x="0" y="0" width="24" height="24"></rect>
                        <path
                          d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                          fill="#000000"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                          fill="#000000"
                          opacity="0.3"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </a>
              </span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Sıra</th>
            <th>Başlık</th>
            <th>İşlemler</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
import datatabeljs from "~/static/plugins/global/datatable.js";
import datatablecss from "~/static/plugins/global/datatable.css";
import db from "~/plugins/firebaseInit.js";

export default {
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
      downloadedImgURL: "",
      title: "",
      allPosts: [],
    };
  },

  methods: {
    getPosts() {
      db.collection("posts")
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot);
          querySnapshot.forEach((doc) => {
            const data = {
              id: doc.id,
              title: doc.data().title,
            };
            this.allPosts.push(data);
          });
        }).then(veri => {
        this.createTable();
        });
    },
    createTable(){
$("#example").DataTable({
      responsive: true,
      pagingType: "full_numbers",
      language: {
        lengthMenu: "Sayfa Başına _MENU_ Veri Getir",
        zeroRecords: "Veri bulunamadı",
        info: " _PAGES_ Sayfadan _PAGE_. Gösteriliyor",
        infoEmpty: "Veri bulunamadı",
        infoFiltered: "(filtered from _MAX_ total records)",
        search: "Ara",
        paginate: {
          previous: "Önceki",
          next: "Sonraki",
          last: "Son",
          first: "İlk",
        },
      },
    });
    }
  },
  mounted() {
    this.getPosts();
  },
};
</script>