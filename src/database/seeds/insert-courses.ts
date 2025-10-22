import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "JavaScript" },
        { name: "NodeJs" },
        { name: "GitHub" },
        { name: "React" },
        { name: "CSS" },
        { name: "TypeScript" },
        { name: "HTML" },
        { name: "Express.js" }
    ]);
};
