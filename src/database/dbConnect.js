import { Sequelize } from "sequelize";
import {
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
} from "../config/constant.js";

export const sequelize = new Sequelize(
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  {
    host: POSTGRES_HOST,
    dialect: "postgres",
    logging: false,
  }
);

export const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connect database successfully");
  } catch (error) {
    console.error("Unable to connect to database");
  }
};
