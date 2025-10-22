import express from 'express'
import type { Request, Response } from 'express'
import { knexConfig } from './database/knex.js'

const app = express()
app.use(express.json())

app.post("/courses", async (request: Request, response: Response) => {
    const { nome } = request.body

 await knexConfig("courses").insert({nome})
    response.status(201).json()
})

app.listen(3333, () => console.log(`Server is running on port 3333`))