const express = require('express')
const path = require('path')
const crypto = require('crypto')
const session = require('express-session')
// TODO: Change to fetch from Salesforce
const formData = require('./formData')
const port = process.env.PORT || 5000
const salt = process.env.PASSWORD_SALT
const saltedPassword = process.env.PASSWORD_HASH
const authorizedUsername = process.env.USERNAME

const app = express()
app.use(session({secret: 'secret', cookie: {maxAge: 6000}}))

app.post('/api/login', (req, res) => {
  const body = req.body
  const { username, password } = body
  const notValidatedRes = JSON.stringify({loginSuccess: false})
  const validatedRes = JSON.stringify({loginSuccess: true})
  if (!username || !password) {
    res.status(401)
    res.send(notValidatedRes)
  }
  const hash = crypto.createHmac('sha512', salt)
  hash.update(password)
  const value = hash.digest('hex')
  if (value == saltedPassword) {
    res.status(200)
    res.send(validatedRes)
    req.session.validated = true
  }
  else {
    res.status(401)
    res.send(notValidatedRes)
  }
}

app.get('/api/getForm', (req, res) => {
  if (!req.session.validated) {
    res.status(401)
    res.send(notValidatedRes)
  }
  else {
    return JSON.stringify(formData)
  }
})

app.listen(PORT, () => console.log('Server running on port', port))
