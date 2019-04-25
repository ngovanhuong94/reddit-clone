// modules
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// config environment
dotenv.config()

// connect database
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
.then(() => console.log('Connected to database'))
.catch(() => console('Failed to connect database'))

// create app
const app = express()

const PORT = process.env.PORT || 5000
// run server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))