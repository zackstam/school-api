'use strict'

const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.string('name', 30).notNullable()
      table.string('body', 200).notNullable()
      table.string('zip_code', 10).notNullable()
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
    this.drop('addresses')
  }
}

module.exports = AddressSchema
