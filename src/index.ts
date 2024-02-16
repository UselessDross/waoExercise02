// begining     [> index <]--<#>[  router-controlls  ]--<#>[  endpoints  ]
const express  = require('express')
const mongoose = require('mongoose')
import { endRoute } from "./router-controlls";
const app = express()

// mongo connection;    connection string;     mongo database for your project;
// v                    V                      v
mongoose.connect('mongodb://localhost:27017/waoDB')

const port = 3000;
app.use('', endRoute)


app.listen(3000, () => {
    console.log(`Server running 'hello-mongoose' on ${port}`)
  })