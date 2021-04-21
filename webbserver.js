const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const hamsterwars = require('./routing/hamsterwars.js')


const PORT = 5566

const staticFolder = path.join(__dirname, 'static')



//middleware

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url} `, req.params);
	next()
})

app.use( express.json())
app.use( cors())
app.use( express.static(staticFolder) )



//routes
app.get('/', (req, res) => {
	console.log('GET /');
	res.send('Examination time')
})


//rest api hamsterwars
app.use('/hamsterwars', hamsterwars)



app.listen(PORT, () => {
	console.log('Server is listening to port ' + PORT);
})