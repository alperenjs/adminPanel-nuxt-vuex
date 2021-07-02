<template>
<div class="card card-custom">
    <div class="card-header">
      <h3 class="card-title">Blog Yazıları</h3>
    </div>
    <!--begin::Form-->
      <div class="card-body">
  <table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
            </tr>
            <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot>
    </table>
</div>
</div>
</template>


<script>
import $ from 'jquery'
import datatabeljs from "~/static/plugins/global/datatable.js"
import datatablecss from "~/static/plugins/global/datatable.css"
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
      blogText: "",
      allPosts:[]
    };
  },

  methods: {
     getPosts() {
      db.collection("posts")
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot)
          querySnapshot.forEach((doc) => {
            const data = {
              id: doc.id,
              title: doc.data().title,
              blogText: doc.data().blogText,
            };
            this.allPosts.push(data);
          });
        });
    },
  },
  mounted() {
    $('#example').DataTable( {
        "pagingType": "full_numbers",
        "language": {
        "lengthMenu": "Sayfa Başına _MENU_ Veri Getir",
        "zeroRecords": "Veri bulunamadı",
        "info": " _PAGES_ Sayfadan _PAGE_. Gösteriliyor",
        "infoEmpty": "Veri bulunamadı",
        "infoFiltered": "(filtered from _MAX_ total records)",
        "search": "Ara",
          "paginate": {
            "previous": "Önceki",
            "next": "Sonraki",
            "last": "Son",
            "first": "İlk"
          }
        }
    } );
    this.getPosts()
  },
};
</script>