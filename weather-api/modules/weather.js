const express = require('express')
require('dotenv/config')
const fetch = require('node-fetch')

const router = express.Router()
const secretkey = process.env.SECRET_KEY

router.get('/' , (req,res) => {
    res.send('usage /weather/(place to search)')
})


router.get('/:query' , async (req,res) => {
    const query = req.params.query
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${ secretkey }&q=${ query }`)
    const data = await response.json()
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(data)
})



module.exports = router