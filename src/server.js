//const express = require('express')
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!, kkkkkkk')
})

app.get('/user', (req, res) => {
  res.json({nome:"Gilliard", email: "gilliard.oliveira@email.com"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})