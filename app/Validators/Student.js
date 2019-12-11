'use strict'

class Student {
  get rules () {
    return {
      // validation rules
      nisn: 'required|unique:students',
      name: 'required',
      study: 'required'
    }
  }

  get messages () {
    return {
      'nisn.required': 'Kolom NISN harus diisi.',
      'nisn.unique': 'NISN sudah terdaftar.',
      'name.unique': 'Nama harus diisi.',
      'study.required': 'Study harus diisi'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = Student
