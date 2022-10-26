//communicate to db

const PORT = 8000
// axios helps with get request
const axios = require('axios').default
// express helps with rooting
const express = require('express')
//will help with cors messages
const cors = require('cors')
//helps get information for API
require('dotenv').config()


const app = express()
app.use(cors())

app.get('/flights', (req, res)=>{
    const options = {
        url: `https://c6f78ac0-9f1e-42cd-984f-24ff9ef193c6-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/flights/collections/departures`,
        headers:{
            accept: 'application/json',
            'X-Cassandra-Token':'AstraCS:QwINLJhJeEXMrNglnQRccGFu:59125a20408f437cfe05a26c85b0f55c93040e49d3958fc52f92f2164ec3c016'
        }
    }



    axios.request(options).then(response =>{
        console.log(response.data)
        res.json(response.data)

    } ).catch(error =>{
        console.log(error)
    })
})

app.listen(PORT,() => console.log('Running on port ' + PORT))