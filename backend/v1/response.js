'use strict'

exports.status = (code, values, res) => {
	const data = {
		status: code,
		values: values,
	}
	res.status(code)
	res.json(data)
	res.end()
}
