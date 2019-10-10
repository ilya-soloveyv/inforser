import client from 'api-client' // Используем для работы с mock заглушками

const state = {
  user: false
}

const mutations = {
  auth_success(state, user) {
    state.user = user
  },
  logout(state){
    state.user = false
  },
  update(state, user) {
    state.user = user
  }
}

const actions = {
  async login({ commit }, userData) {
    // Получаем пользователя по логину и паролю
    let response = await client.getUser(userData)
    if (response) {
      // Если вернулся объект, то коммитим его
      commit('auth_success', response)
    }
    return response
  },
  logout({ commit }) {
    commit('logout')
  },
  async update({commit}, userData) {
    let response = await client.updateUser(userData)
    if (response) {
      commit('update', userData)
    }
    return response
  }
}

const getters = {
  permission: state => {
    // геттер для уровней доступа
    return (state.user.permission !== undefined) ? state.user.permission : false
  },
  userFullName: state => {
    // Полное имя пользователя
    return state.user.lastname + ' ' + state.user.firstname + ' ' + state.user.middlename
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}