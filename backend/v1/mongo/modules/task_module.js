const Task = require('../schemas/task')

const config = require('../../../settings/config')
const mongoose = require('mongoose')

const connect = async () => {
	await mongoose.connect(config.db_uri)
}

exports.getAllTasks = async () => {
	await connect()
	let tasks = await Task.find({})
	return tasks
}

exports.postTask = async (args) => {
	await connect()
	await Task.create({
		...args,
	})
	return true
}

exports.changeStatus = async (task_id) => {
	await connect()
	const task = await Task.findOne({ _id: task_id })
	task.completed = !task.completed
	await task.save()
	return true
}
