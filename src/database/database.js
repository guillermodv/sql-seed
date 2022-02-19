import Sequelize from "sequelize";

export const sequelize = new Sequelize("postgres", "postgres", "inicio00", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
  },
  loggin: false,
});
