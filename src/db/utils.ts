import { sqliteTableCreator } from "drizzle-orm/sqlite-core";
export const databasePrefix = "curate"

export const createTable = sqliteTableCreator((name) => `${databasePrefix}_${name}`)
