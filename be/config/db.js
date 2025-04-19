import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("TCC1", "root", "", {
  host: "34.60.37.9",
  dialect: "mysql",
});

export default db;
