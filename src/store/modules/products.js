import client from 'api-client' // Используем для работы с mock заглушками

const state = {
  list: []
}

const mutations = {
  setProducts(state, products) {
    state.list = products
  }
}

const actions = {
  async fetchProducts({ commit }) {
    // Возвращаем список всем товаров
    let products = await client.fetchProducts()
    commit('setProducts', products)
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}