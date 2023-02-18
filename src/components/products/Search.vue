<template>
  <div class="d-flex justify-content-between">
    <div class="">
      <h1>Products</h1>
    </div>
    <div class="col-md-6 my-auto">
      <input
        v-model="search"
        class="form-control rounded border border-dark w-100 p-2"
        placeholder="Search for keywords..."
        @change="searchItem" />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "Search",
  components: {},
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchItem() {
      this.$store.commit("setSearch", this.search);
    },
  },
};
</script>
<style scoped></style>
