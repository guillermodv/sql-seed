// config.js
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, ".env"),
});

console.log(process.env.NODE_ENV);

export const config = {
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 4200,
};
