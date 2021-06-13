<template>
  <div class="home-page">
    <section class="intro">
      <h1>get the latest news</h1>
    </section>
    <button @click="getData">Getir</button>
    <button @click="postData">Post</button>
    <section class="featured-posts">
      <PostPreview
        id="1"
        title="Hello there!"
        previewText="this is preview text"
      />
      <PostPreview id="2" title="Hello 2!" previewText="222 preview text" />
    </section>
  </div>
</template>


<script>
import db from "@/plugins/firebaseInit";
import axios from "axios";
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview,
  },
  data() {
    return {
      gelenVeri: [],
      id: "",
      text: "",
    };
  },
  methods: {
    getData() {
      console.log("çalşt");
      db.collection("posts")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = {
              id: doc.id,
              id: doc.data().id,
              text: doc.data().text,
            };
            this.gelenVeri.push(data);
          });
          console.log(this.gelenVeri);
        });
    },
    postData() {
      console.log("çalşt");
      // Add a new document with a generated id.
      db.collection("posts")
        .add({
          id: "6",
          text: "kurtlar sofrası",
        })
        .then(() => {
          this.gelenVeri.push({
            id: "6",
            text: "kurtlar sofrası",
          });
        })
        // .then(toastr.success("Masaj başarıyla eklendi.", "Başarılı!"))
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~/assets/images/bg.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>