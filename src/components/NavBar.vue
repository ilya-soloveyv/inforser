<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-3">
    <section class="container">
      <b-navbar-brand :to="{ name: 'home' }">Инфорсер</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'home' }" active-class="active" exact>Главная</b-nav-item>
          <!-- Пункт меню "Товары" показываем только авторизированным пользователям. Доступна только администратору -->
          <b-nav-item :to="{ name: 'products' }" active-class="active" v-if="permission">Товары</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <!-- В случае успешной аутентификации меняем пукнт Войти на выпадающее меню пользователя -->
          <b-nav-item :to="{ name: 'login' }" v-if="!permission" active-class="active">Войти</b-nav-item>
          <b-nav-item-dropdown v-else>
            <!-- Используем геттер для составления полного имени пользователя -->
            <template v-slot:button-content>{{ userFullName }}</template>
            <b-dropdown-item :to="{ name: 'profile' }" active-class="active">Профиль</b-dropdown-item>
            <b-dropdown-item @click.prevent="logout()">Выйти</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </section>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    permission: function() {
      // Подгружаем уровни доступа
      return this.$store.getters["users/permission"];
    },
    userFullName: function() {
      // Геттер полного имени пользователя
      return this.$store.getters["users/userFullName"];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("users/logout").then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style>
</style>