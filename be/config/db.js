import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("docker", "root", "", {
  host: "35.222.231.165",
  dialect: "mysql",
});

export default db;
