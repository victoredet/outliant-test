<template>
  <div class="w-100 p-4">
    <h4 class="text-center">
      {{
        this.$store.state.editSelect.id == "" ? "Add Product" : "Edit Product"
      }}
    </h4>
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
        <button
          class="w-100 rounded bg-primary text-white py-2 border-0"
          @click="submit">
          {{ this.$store.state.editSelect.id == "" ? "Create" : "Save" }}
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { v4 as uuidv4 } from "uuid";

export default {
  name: "ProductForm",
  components: {},
  data() {
    return {
      id: "",
      name: "",
      price: "",
    };
  },

  methods: {
    submit() {
      //add to state
      if (this.name == "") {
        alert("please enter a name");
        return;
      }
      if (this.price == "") {
        alert("please enter a price");
        return;
      }
      const item = {
        id: uuidv4(),
        name: this.name,
        price: this.price,
      };
      if (this.$store.state.editSelect.id == "") {
        this.$store.commit("addProduct", item);
      } else {
        this.$store.commit("updateProduct", item);
        this.$store.commit("clearItem", { id: "", name: "", price: "" });
      }
      this.price = "";
      this.name = "";
    },
  },
};
</script>
