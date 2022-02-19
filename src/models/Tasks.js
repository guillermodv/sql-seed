import Sequelize from "sequelize";
import { sequelize } from "../database/database";

sequelize.define("task", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  done: {
    type: Sequelize.BOOLEAN,
  },
  projectId: {
    type: Sequelize.INTEGER,
  },
});
