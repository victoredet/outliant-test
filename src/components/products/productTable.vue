<template>
  <div class="table">
    <table class="col-12 border border-primary">
      <thead>
        <tr class="bg-warning text-center">
          <th scope="col-4">Name</th>
          <th scope="col-4">Price</th>
          <th scope="col-4">Action</th>
        </tr>
      </thead>
      <ProductTableBody />
    </table>
  </div>
</template>
<script lang="ts">
import ProductTableBody from "./ProductTableBody.vue";
export default {
  name: "ProductTable",
  components: {
    ProductTableBody,
  },
  data() {
    return {};
  },
  methods: {
    setEdit() {
      alert("edit this item");
    },
    deleteItem() {
      alert("delete this item");
    },
  },
};
</script>
