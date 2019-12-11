'use strict'

const Model = use('Model')

class Package extends Model {
    static get table () {
        return 'packages'
      }

     static get primaryKey () {
        return 'id'
    }
}

module.exports = Package
