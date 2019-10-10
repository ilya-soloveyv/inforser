import products from './data/products'
import users from './data/users'

export default {
  fetchProducts () {
    return products
  },
  getUser (user) {
    var checkUser = users.find(x => x.login === user.login && x.password === user.password)
    if (checkUser) return checkUser
    return false
  },
  updateUser (user) {
    return user
  }
}