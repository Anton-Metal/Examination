//nmp packet 
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const hamsters = require('./routing/hamsters')

const PORT = process.env.PORT || 5566

const staticFolder = path.join(__dirname, 'static')



//middleware

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url} `, req.params);
	next()
})


//om express.json inte fnns kommre det inte funka att skcika data till serven i request body 
app.use( express.json())
app.use( cors())
// för att publicera en statisk mapp, 
//i stället för att länka till varje sida för sig så lägger länkar man hela mappen i stället 
app.use( express.static(staticFolder) )



//routes

// root fär webroot
app.get('/', (req, res) => {
	console.log('GET /');
	res.send('Examination time')
})


//rest api hamsterwars
app.use('/hamsters', hamsters)


// starta webserven
app.listen(PORT, () => {
	console.log('Server is listening to port ' + PORT);
})