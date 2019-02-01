'use strict'

const Schema = use('Schema')

class ProfileSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments()
      table.string('nickname', 100).notNullable()
      table.string('age', 80).notNullable()
      table
        .integer('student_id')
        .unsigned()
        .references('id')
        .inTable('students')
        .onUpdate('NO ACTION')
        .onDelete('SET NULL');

      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
