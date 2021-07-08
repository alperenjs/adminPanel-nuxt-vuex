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
    <label>Full Name:</label>
    <input type="email" class="form-control" placeholder="Enter full name"/>
    <span class="form-text text-muted">Please enter your full name</span>
   </div>
   <div class="col-lg-6">
    <label>Contact Number:</label>
    <input type="email" class="form-control" placeholder="Enter contact number"/>
    <span class="form-text text-muted">Please enter your contact number</span>
   </div>
  </div>
  <div class="form-group row">
   <div class="col-lg-6">
    <label>Address:</label>
    <div class="input-group">
     <input type="text" class="form-control" placeholder="Enter your address"/>
     <div class="input-group-append"><span class="input-group-text"><i class="la la-map-marker"></i></span></div>
    </div>
    <span class="form-text text-muted">Please enter your address</span>
   </div>
   <div class="col-lg-6">
    <label>Postcode:</label>
    <div class="input-group">
     <input type="text" class="form-control" placeholder="Enter your postcode"/>
     <div class="input-group-append"><span class="input-group-text"><i class="la la-bookmark-o"></i></span></div>
    </div>
    <span class="form-text text-muted">Please enter your postcode</span>
   </div>
  </div>
  <div class="form-group row">
   <div class="col-lg-6">
    <label>User Group:</label>
    <div class="radio-inline">
     <label class="radio radio-solid">
      <input type="radio" name="example_2" checked="checked" value="2"/>
      <span></span>
      Sales Person
     </label>
     <label class="radio radio-solid">
      <input type="radio" name="example_2" value="2"/>
      <span></span>
      Customer
     </label>
    </div>
    <span class="form-text text-muted">Please select user group</span>
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
import firebase from "firebase/app"
import $ from "jquery";
import toastr from "~/static/plugins/global/toastr.min.js";
import db from "~/plugins/firebaseInit.js";
import Swal from "sweetalert2"

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

  data() {
    return {
    };
  },

  methods: {
  
  },
  mounted() {
  },
};
</script>

<style scoped>

</style>