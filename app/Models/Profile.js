'use strict'

const Model = use('Model')

class Profile extends Model {
    student () {
        return this.belongsTo('App/Models/Student')
    }
}

module.exports = Profile
