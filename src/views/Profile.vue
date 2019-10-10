<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <h2>Страница профиля</h2>
        <b-form @submit.prevent="update()">
          <b-form-group id="user-label-login" label="Логин" label-for="user-input-login">
            <b-form-input
              id="user-input-login"
              v-model="user.login"
              type="text"
              placeholder="Введите ваш логин"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="user-label-firstname" label="Имя" label-for="user-input-firstname">
            <b-form-input
              id="user-input-firstname"
              v-model="user.firstname"
              type="text"
              placeholder="Введите ваше имя"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="user-label-middlename"
            label="Отчество"
            label-for="user-input-middlename"
          >
            <b-form-input
              id="user-input-middlename"
              v-model="user.middlename"
              type="text"
              placeholder="Введите ваше отчество"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="user-label-lastname" label="Фамилия" label-for="user-input-lastname">
            <b-form-input
              id="user-input-lastname"
              v-model="user.lastname"
              type="text"
              placeholder="Введите вашу фамилию"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="user-label-permission"
            label="Уровень доступа"
            label-for="user-input-lastname"
          >
            <b-form-checkbox
              v-model="user.permission"
              name="user-input-permission"
              value="manager"
              disabled
            >Менеджер</b-form-checkbox>
            <b-form-checkbox
              v-model="user.permission"
              name="user-input-permission"
              value="administrator"
            >Администратор</b-form-checkbox>
          </b-form-group>
          <b-button type="submit" variant="primary">Обновить данные</b-button>
          <b-button type="button" variant="light" class="float-right">Изменить пароль</b-button>
          <b-alert v-model="statusUpdate" variant="success" class="mt-3">Успешно сохранено!</b-alert>
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
      statusUpdate: false
    };
  },
  computed: {
    user() {
      // Возвращаем клон юзера. Необходимо что бы не редактировать данные юзера из store.
      return Object.assign({}, this.$store.state.users.user);
    }
  },
  methods: {
    update() {
      // Сохраняем
      this.$set(this, "statusUpdate", false);
      this.$store.dispatch("users/update", this.user).then(response => {
        if (response) {
          // При успешном сохранении выводим сообщение
          this.$set(this, "statusUpdate", true);
        }
      });
    }
  }
};
</script>

<style>
</style>