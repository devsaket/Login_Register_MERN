const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors');

const connectDB = require('./server/database/connection')

const app = express()

app.use(cors());
app.use(express.json());


dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 5000

// log requests
app.use(morgan('tiny'))

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

//mongoose link
connectDB();

// Routes 
app.use('/',require('./server/routes/userroutes'))

app.listen(PORT, () =>{
    console.log(`Server is Running at http://localhost:${PORT}`)
})