'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('students', 'StudentController.index')
  Route.get('students/:id', 'StudentController.show')
  Route.post('students', 'StudentController.store')
  Route.put('students/:id', 'StudentController.update')
  Route.delete('students/:id', 'StudentController.delete')
}).prefix('api/v1')
