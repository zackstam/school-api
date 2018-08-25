'use strict'

const Model = use('Model')

class Student extends Model {
    static get table () {
        return 'students'
      }

     static get primaryKey () {
        return 'id'
    }
}

module.exports = Student
