// begining     [> index <]--<#>[  router-controlls  ]--<#>[  endpoints  ]--<#>[  order  ]
//                   |                                           <^>
//                   +-------------<#>[  seed  ]------------------+

const express  = require('express')
import { router } from "./router-controlls";
const app = express()
import { seed } from './seed';

const port = 3000;
app.use('/orders', router)
app.get('/seed', seed)

app.listen(3000, () => {
    console.log(`Listening on port ${port}`)
  })
   