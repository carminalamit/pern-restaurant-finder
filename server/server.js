// modules
require('dotenv').config()
const express = require('express')


// middlewares
const app = express()




const port = 5000
app.listen(5000, () => {
    console.log(`Server is running on PORT ${port}!`)
})