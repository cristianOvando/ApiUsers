import mysql from "mysql2/promise";

export function getConnection() {
  return mysql.createConnection({
    host: "44.213.19.205",
    user: "apirest",
    password: "password",
    port: 3306,
    database: "Prueba",
  });
}
