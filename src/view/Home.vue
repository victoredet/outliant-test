<template>
  <div class="">
    <div class="col-10 mx-auto">
      <Nav />
      <Banner />
      <div class="d-none d-md-flex py-5">
        <div class="col-4">
          <div class="col-10">
            <p class="fw-bold">Header text</p>
            <p class="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus possimus eius, rerum reprehenderit quos deleniti
              cupiditate aut illo commodi amet dicta sint aperiam tenetur
              nostrum beatae, maiores, eligendi quis culpa.
            </p>
          </div>
        </div>
        <div
          class="col-5 bg-secondary d-none d-md-block"
          style="height: 400px"></div>
        <div class="col-4 d-flex">
          <div class="col-2"></div>
          <div class="col-10 my-auto">
            <p class="fw-bold float-bottom">Header text</p>
            <p class="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus possimus eius, rerum reprehenderit quos deleniti
              cupiditate aut illo commodi amet dicta sint aperiam tenetur
              nostrum beatae, maiores, eligendi quis culpa.
            </p>
          </div>
        </div>
      </div>
      <div class="py-3"></div>
      <div class="d-md-none">
        <p class="fw-bold">Header text</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          possimus eius, rerum reprehenderit quos deleniti cupiditate aut illo
          commodi amet dicta sint aperiam tenetur nostrum beatae, maiores,
          eligendi quis culpa.
        </p>
      </div>

      <div class="d-md-none">
        <p class="fw-bold">Header text</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          possimus eius, rerum reprehenderit quos deleniti cupiditate aut illo
          commodi amet dicta sint aperiam tenetur nostrum beatae, maiores,
          eligendi quis culpa.
        </p>
      </div>
    </div>
    <div class="py-5"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import Banner from "../components/home/Banner.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Footer,
    Banner,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped></style>
