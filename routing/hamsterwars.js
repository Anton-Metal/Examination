const getDataBase = require('../database.js')
const db = getDataBase()

const express = require('express')
const router = express.Router()


// lägga till rest API

router.get('/', (req, res) =>{
	console.log('/hamsterwars rest API');
	res.send('/hamsterwars rest API')
})

module.exports = router