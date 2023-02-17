<template>
  <div class="w-100 p-4">
    <h4 class="text-center">Add Product</h4>
    <p class="text-center text-secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div class="form mx-auto col-10">
      <div class="form-group">
        <input
          class="form-control my-3 border-0"
          placeholder="Name"
          type="text"
          v-model="name" />
      </div>
      <div class="form-group">
        <input
          class="form-control my-3 border-0"
          placeholder="Price"
          type="text"
          v-model="price" />
      </div>

      <div class="form-group">
        <button class="w-100 rounded bg-primary text-white py-2 border-0">
          Create
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "ProductForm",
  components: {},
  data() {
    return {
      name: "",
      price: "",
    };
  },
  methods: {
    submit() {
      //add to state
    },
  },
};
</script>
