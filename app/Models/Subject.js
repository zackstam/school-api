'use strict'

const Model = use('Model')

class Subject extends Model {

    student() {
        return this.belongsToMany('App/Models/Student');
    }
}

module.exports = Subject
