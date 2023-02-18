<template>
  <div class="">
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="d-flex">
      <div class="col-lg-3 col-md-6 col-sm-10">
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p class="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          excepturi saepe accusantium maiores doloribus
        </p>
        <div class="d-none d-md-flex justify-content-between">
          <button class="btn border-0 bg-primary text-white">
            Call to action
          </button>
          <button class="btn border border-1 border-primary">
            See Workspace
          </button>
        </div>
        <div class="d-md-none justify-content-between">
          <button class="btn border-0 w-100 bg-primary text-white my-2">
            Call to action
          </button>
          <button class="btn border w-100 border-1 border-primary my-2">
            See Workspace
          </button>
        </div>
      </div>
      <div class="clear col-2 d-none d-md-block"></div>
      <div class="images col-5 d-none d-md-block">
        <div class="w-100 h-100 bg-warning border-0"></div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Banner",
  components: {},
};
</script>
<style scoped></style>
