const Model = require("./Model")

class Cat extends Model {
  static get tableName() {
    return "cats"
  }
}

module.exports = Cat
