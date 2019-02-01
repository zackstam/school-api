'use strict'

const Model = use('Model')

class Student extends Model {

    profile () {
        return this.hasOne('App/Models/Profile')
    }

    address () {
        return this.hasMany('App/Models/Address')
    }
    
    subject() {
        return this.belongsToMany('App/Models/Subject')
                   .pivotTable('student_subjects')
    }
}

module.exports = Student
