const express = require('express')
const app = express()
const port = process.env.PORT || 3500

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const routes = require('./settings/routes')
routes(app)

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})
