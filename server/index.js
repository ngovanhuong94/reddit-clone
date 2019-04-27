// modules
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
// config environment
dotenv.config()

// connect database
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
.then(() => console.log('Connected to database'))
.catch(() => console.log('Failed to connect database'))

// create app
const app = express()

// config middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(passport.initialize())
passport.use(require('./config/passportJwt'))
passport.use(require('./config/passportLocal'))

// routes
app.use('/api/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000
// run server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))