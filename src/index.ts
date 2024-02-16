// begining.were: [> index <]--<#>[  router-controlls  ]--<#>[  endpoints  ]
import  express  from "express";
import { endRoute } from "./router-controlls";


const app = express()
 const hostname = '127.0.0.1';
 const port = 3000;

app.use('', endRoute)


 app.listen(3000, () => {
    console.log(`Server running 'hello-mongoose' on ${port}`)
  })