import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './config/routes.js'

const app = express()
const corsOption={
    origin: '*'
}

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors(corsOption))
app.use('/api', router)

app.get('/', (req, res)=>{
    console.log('bna')
    res.send('esta es mi API')
})

const port = process.env.PORT || 8000
console.log(`PUERTO: ${port}`)

const server = app.listen(8000, ()=>{
    console.log(`Server running on port ${server.address().port}`)
})

export default app