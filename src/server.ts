import express from 'express'
import type { Request, Response } from 'express'
import { knexConfig } from './database/knex.js'

const app = express()
app.use(express.json())

app.post("/courses", async (request: Request, response: Response) => {
    const { name } = request.body
    //await knexConfig.raw("INSERT INTO courses (nome) VALUES(?)", [nome])

    await knexConfig("courses").insert({ name })
    response.status(201).json()
})

app.get("/courses", async (request: Request, response: Response) => {
    // const courses = await knexConfig("courses").select("*");

    const courses = await knexConfig("courses").select().orderBy("name", "desc")
    response.json(courses);
})

app.put("/courses/:id", async (request: Request, response: Response) => {
    const { name } = request.body
    const { id } = request.params

    await knexConfig("courses").update({ name }).where({ id })
    return response.json()
})

app.delete("/courses/:id", async (request: Request, response: Response) => {
    const { id } = request.params

    await knexConfig("courses").delete().where({ id })
    return response.json()
})


app.post("/modules", async (request: Request, response: Response) => {
    const { name, id_courses } = request.body

    await knexConfig("course_modules").insert({ name, id_courses })
    return response.status(201).json()
})

app.get("/modules", async (request: Request, response: Response) => {


    const modules = await knexConfig("course_modules").select()
    return response.json(modules)
})


app.listen(3333, () => console.log(`Server is running on port 3333`))