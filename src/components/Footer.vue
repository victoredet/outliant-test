<template>
  <div class="footer col-12 position-relative">
    <div class="bg-warning py-5 w-100 position absolute bottom-0">
      <div class="d-flex col-sm-11 col-md-10 col-lg-9 col-xl-8 mx-auto">
        <div class="d-none d-md-block col-8 position-relative">
          <div
            class="d-none d-md-block image bg-secondary mx-auto col-8 sticky-navbar"></div>
        </div>
        <div class="col-md-6 col-sm-11 py-5 container">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p class="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            beatae quod quo ipsa unde?
          </p>
          <div class="">
            <button class="btn bg-primary text-white">Call to Action</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.sticky-navbar {
  position: absolute;
  top: -100px;
  z-index: 1000;
  height: 400px;
}
</style>
