import Sequelize from "sequelize";

export const sequelize = new Sequelize("test", "postgres", "inicio00", {
  host: "localhost",
  dialect: "postgres",
  port: "1234",
  pool: {
    max: 5,
    min: 0,
  },
  loggin: false,
});
