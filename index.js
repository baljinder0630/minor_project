import express from "express"
import dotenv from 'dotenv'
import api from "./routes/api.routes.js"
import db from "./config/db.js"

dotenv.config()
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use(express.json())

app.use('/api', api)

const port = process.env.PORT
app.listen(port, () => {
    console.log("Listening to the port " + port)
})

export default app