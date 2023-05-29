import mysql from "mysql"

export const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"recep123",
    database:"nodedb"
})