'use strict'

const Schema = use('Schema')

class StudentSubjectSchema extends Schema {
  up () {
    this.create('student_subjects', (table) => {
      table.integer('student_id').unsigned().index('project_id')
      table.integer('subject_id').unsigned().index('subject_id')
      table.foreign('student_id').references('students.id').onDelete('cascade').onUpdate('cascade')
      table.foreign('subject_id').references('subjects.id').onDelete('cascade').onUpdate('cascade');
    })
  }

  down () {
    this.drop('student_subjects')
  }
}

module.exports = StudentSubjectSchema
