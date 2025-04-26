'use strict'

const response = require('./../response')
const task_module = require('../mongo/modules/task_module')

exports.getAll = async (req, res) => {
	return response.status(200, await task_module.getAllTasks(), res)
}

exports.postOne = async (req, res) => {
	await task_module.postTask(req.body)
	return response.status(201, {}, res)
}

exports.changeStatus = async (req, res) => {
	await task_module.changeStatus(req.body.task_id)
	return response.status(202, {}, res)
}
