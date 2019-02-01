'use strict'

/*
|--------------------------------------------------------------------------
| StudentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Student = use('App/Models/Student')

class StudentSeeder {
  async run () {
    const u1 = new Student()
      u1.id = '1'
      u1.nisn = '11610026'
      u1.name = 'Muhammad Zakuan'
      u1.study = 'Matematika'
      await u1.save()
  }
}

module.exports = StudentSeeder
