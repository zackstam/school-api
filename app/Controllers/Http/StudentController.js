'use strict'

const Student = use('App/Models/Student')
class StudentController {
    async index ({response}) {
        let students = await Student.all()

        return response.json(students)
    }

    async store ({request, response}) {
        const studentInfo = request.only(['nisn', 'name', 'study'])

        const student = new Student()
        student.nisn = studentInfo.nisn
        student.name = studentInfo.name
        student.study = studentInfo.study
        await student.save()
        return response.status(201).json(student)
    }

    async update ({params, request, response}) {
        const studentInfo = request.only(['nisn', 'name', 'study'])

        const student = await Student.find(params.id)
        if (!student) {
          return response.status(404).json({data: 'Resource not found'})
        }
        student.nisn = studentInfo.nisn
        student.name = studentInfo.name
        student.study = studentInfo.study

        await student.save()

        return response.status(200).json(student)
      }

    async show ({params, response}) {
        const student = await Student.find(params.id)

        return response.json(student)
    }

    async delete ({params, response}) {
        const student = await Student.find(params.id)
        if (!student) {
          return response.status(404).json({data: 'Resource not found'})
        }
        await student.delete()

        return response.status(204).json(null)
    }
}

module.exports = StudentController
