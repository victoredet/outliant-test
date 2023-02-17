<template>
  <tbody class="text-center">
    <tr v-for="prod in products">
      <td class="border border-primary col-4 text-secondary">
        {{ prod.name }}
      </td>
      <td class="border border-primary col-4">Otto</td>
      <td class="border border-primary col-4">
        <button
          class="btn bg-primary text-white border-0 me-2"
          @click="setEdit">
          Edit
        </button>
        <button
          class="btn border-primary text-primary"
          @click="deleteItem(prod.id)">
          Delete
        </button>
      </td>
    </tr>
  </tbody>
</template>
<script lang="ts">
export default {
  name: "ProductTableBody",
  components: {},
  data() {
    return { products: [], select: "" };
  },
  mounted() {
    this.products = this.$store.state.products;
    console.log(this.$store.state.products);
  },
  methods: {
    setEdit() {
      alert("edit this item");
    },
    deleteItem(item) {
      this.select = item;
      let newProds = this.products.filter((prod) => {
        return prod.id != this.select;
      });
      this.products = newProds;
    },
  },
};
</script>
