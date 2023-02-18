<template>
  <div class="">
    <div class="col-10 mx-auto">
      <Nav />
      <div class="py-5"></div>
      <div class="col-md-6 pt-5">
        <Search />
      </div>
      <div class="d-flex">
        <div class="col-md-6">
          <ProductTable />
        </div>
        <div class="form__div col-md-6">
          <div class="bg-warning col-md-10 mx-auto">
            <ProductForm />
          </div>
        </div>
      </div>
    </div>
    <div class="py-5"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import ProductTable from "../components/products/ProductTable.vue";
import ProductForm from "../components/products/ProductForm.vue";
import Search from "../components/products/Search.vue";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Products",
  components: {
    ProductTable,
    Search,
    ProductForm,
    Nav,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
