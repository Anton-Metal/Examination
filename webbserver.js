const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const PORT = 5566

const staticFolder = path.join(__dirname, 'static')



//middleware
app.use( express.json())
app.use( cors())
app.use( express.static(staticFolder) )



app.use((req, res, next) => {
	console.log(`${req.method} ${req.url} `, req.params);
	next()
})


//routes
app.get('/', (req, res) => {
	res.send('Examination time')
})



app.listen(PORT, () => {
	console.log('Server is listening to port ' + PORT);
})