const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('../views/map', {apiKey: process.env.KAKAO_API_KEY})
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})