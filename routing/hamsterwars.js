const getDataBase = require('../database.js')
const db = getDataBase()

const express = require('express')
const router = express.Router()


// lägga till rest API
// GET hamsterwars
router.get('/', async (req, res) => {
	//console.log('/hamsterwars rest API');
	//res.send('/hamsterwars rest API')

	const hamsterwarsRef = db.collection('hamsterDocs')
	const snapshot = await hamsterwarsRef.get()


	console.log("check if data works", snapshot.empty)
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

module.exports = router