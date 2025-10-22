import { Extensions } from "@prisma/client/runtime/library";

export default {
    client: "sqlite3",
    connection: {
        filename: "./src/database/database.db",
    },
    useNullAsDefault: true,
    migrations: {
        extensions: "ts",
        directory: "./src/database/migrations"
    },
    seeds: {
        Extensions: "ts",
        directory: "./src/database/seeds",
    },
}