require('dotenv').config()
const fs = require('fs')
const path = require('path')
const express = require('express')
const Twitter = require('twitter-lite')

const twitter = new Twitter({bearer_token: process.env.TWITTER_TOKEN})
const app = express()
const port = 4000

const scientistNames = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'scientistNames.json'), 'utf8')
)

app.get('/api/server-name', (req, res) => {
  const b0 = Math.floor(Math.random() * 255)
  const b1 = Math.floor(Math.random() * 255)
  const b2 = Math.floor(Math.random() * 255)
  const b3 = Math.floor(Math.random() * 255)

  const instanceAddress = `${b0}.${b1}.${b2}.${b3}`

  const {prettyName, prettyNameLink} =
    scientistNames[Math.floor(Math.random() * scientistNames.length)]

  res.header('Access-Control-Allow-Origin', '*')
  res.send({prettyName, prettyNameLink, instanceAddress})
})

app.get('/api/twitter-names', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  try {
    const twitterResponse = await twitter.post('users/lookup', {
      user_id: req.query.ids,
    })
    const users = {}
    twitterResponse.forEach((u) => {
      users[u.id] = u.name
    })
    res.send(users)
  } catch (e) {
    console.error(e)
    res.send({})
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
