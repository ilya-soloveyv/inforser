<template>
  <section class="container">
    <h2>Товары</h2>
    <b-table
      :items="products"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    ></b-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sortBy: "title",
      sortDesc: false,
      fields: [
        { key: "title", sortable: true, label: 'Наименование' },
        { key: "count", sortable: true, label: 'Кол-во' },
        { key: "price", sortable: true, label: 'Цена' }
      ]
    };
  },
  computed: {
    products() {
      // Получаем список товаров
      return this.$store.state.products.list;
    }
  },
  created() {
    // Вызываем событие, что бы заполнить список товаров
    this.$store.dispatch("products/fetchProducts")
  }
};
</script>

<style>
</style>