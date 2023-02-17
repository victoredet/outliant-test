<template>
  <div class="nav-bar d-flex justify-content-between">
    <div class="logo">Logo</div>

    <div class="logo">action</div>
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
