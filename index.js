const express = require('express')
const app = express()
const port = 3000

const baseAPI='https://pokeapi.co/api/v2/pokemon'

// API usage:
// GET: Base API + "pokemon Query", this can be either pkm number or exact name

app.get('/', (req, res) => {
  res.send('Welcome to the custom pokeAPI!')
})

// Test 1: Create an endpoint to get pokemon 151 (mew) from the pokeAPI using a get



// Test 2: Create an endpoint to get a pokemon with a number passed from the request



// Test 3: Get pokemons 1-9, get their names, main type 
// and return them on an array with the following specs:
// [{name, type}]


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})