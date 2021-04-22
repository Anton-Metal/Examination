// importera databas funktioner
const getDataBase = require('../database.js')
// hämta ett databas objekt 
const db = getDataBase()

const express = require('express')
const router = express.Router()


//HAMSTER TEST INNAN HOHOH

// lägga till rest API
// GET hamsterwars
router.get('/', async (req, res) => {
	//console.log('/hamsterwars rest API');
	//res.send('/hamsterwars rest API')

	const hamsterwarsRef = db.collection('hamsterDocs')
	const snapshot = await hamsterwarsRef.get()


//	console.log("check if data works", snapshot.empty)
	if( snapshot.empty ) {
		res.send([])
		return
	}

	let items = []
	snapshot.forEach(doc => {
		const data = doc.data()
		// för att id ska visas i datan
		// ID behövs för post put delete
		data.id = doc.id
		items.push( data )
	})

	res.send(items)
})

// GET /hamsterwars/:id

router.get('/:id', async (req, res) => {

	const id = req.params.id
	const docRef = await db.collection('hamsterDocs').doc(id).get()

	if( !docRef.exists ) {
		res.status(404).send('No matching id')
		return
	}

	const data = docRef.data()
	//för att vissa id
	data.id = docRef.id
	res.send(data)

	})

	// POST/ hamsterwars
	router.post('/', async (req, res) => {
		const object = req.body

		if( !hamstersObject ) {
			res.sendStatus(400)
			return
		}
		const docRef = await db.collection('hamsterwars').add(object)
		res.send(docRef.id)
	})

	// PUT/ hamsterwars
	router.put('/:id', async (req, res) => {

		const object = req.body
		const id = req.params.id

		if( !object || !id ) {
			res.sendStatus(400)
			return
		}

		//kontrolerar om doc matchar id i databasen
		const docRef = db.collection('hamsterwars').doc(id)
		await docRef.set(object, { merge: true })

		res.sendStatus(200)
	})

	// en funktion för att kolla om datan är giltiga objekt, även för att spara kod/ alltså inte repetera kod
	function hamstersObject(maybeAnObject) {
		if(!maybeAnObject || maybeAnObject.name )
		
			return false

		return true
 
	} 




module.exports = router