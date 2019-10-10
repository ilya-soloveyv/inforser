<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-sm-7 col-md-5 col-lg-4 col-xl-3">
        <h2>Авторизация</h2>
        <b-form @submit.prevent="auth">
          <b-form-group label="Логин" label-for="login">
            <b-form-input
              id="login"
              type="text"
              v-model="login"
              required
              placeholder="Введите ваш логин"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Пароль:" label-for="password">
            <b-form-input id="password" type="password" v-model="password" required></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" :disabled="loading">Войти</b-button>
          <b-alert v-model="statusLogin" variant="danger" class="mt-3">Пароль или логин ввведены неверно</b-alert>
        </b-form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      statusLogin: false,
      login: '',
      password: ''
    };
  },
  methods: {
    auth() {
      this.$set(this, 'loading', true)
      let login = this.login;
      let password = this.password;
      this.$store.dispatch("users/login", { login, password }).then(response => {
        this.$set(this, 'loading', false)
        if (response) {
          // В случае успешной авторизации редикректим на страницу с профилем
          this.$router.push('/profile')
        } else {
          // В случае ошибки авторизации выводим сообщение
          this.$set(this, 'statusLogin', true)
        }
      })
    }
  }
};
</script>

<style>
</style>