'use strict'

const Model = use('Model')

class Order extends Model {
    static get table () {
        return 'orders'
      }

     static get primaryKey () {
        return 'id'
    }
}

module.exports = Order
