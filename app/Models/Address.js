'use strict'

const Model = use('Model')

class Address extends Model {
    Student() {
        return this.belongsTo('App/Models/Student')
    }
}

module.exports = Address
