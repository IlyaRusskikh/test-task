'use strict'

module.exports = (app) => {
	const task_controller = require('../v1/controllers/task_controller')

	app.route('/v1/tasks').get(task_controller.getAll)
	app.route('/v1/tasks').post(task_controller.postOne)
	app.route('/v1/tasks').patch(task_controller.changeStatus)
}
