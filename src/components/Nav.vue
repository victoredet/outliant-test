<template>
  <div class="bg-white position-relative">
    <div class="position-fixed col-10 top-0 bg-white">
      <div class="nav-bar d-flex justify-content-between py-2 col-12">
        <div class="logo"><h3 class="">Logo</h3></div>
        <div class="d-none col-md-4 d-md-flex mx-auto">
          <router-link to="/" class="mx-auto">
            <p>Home</p>
          </router-link>
          <p class="mx-auto">About</p>
          <p class="mx-auto">Services</p>
          <router-link to="/products" class="mx-auto">
            <p>Products</p>
          </router-link>
        </div>
        <div class="logo">
          <button
            class="rounded bg-primary text-white border-0 p-2 d-none d-md-block">
            Call to Action
          </button>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="rounded bg-primary text-white border-0 p-2 d-md-none"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            Menu
          </button>

          <!-- Modal -->
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Logo</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <router-link to="/products">
              <p>Products</p>
            </router-link>
            <button class="rounded bg-primary text-white border-0 p-2">
              Call to Action
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavTop",
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    this.user = this.$store.state.user;
  },
};
</script>
<style scoped></style>
