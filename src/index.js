import app from "./app";
import "@babel/polyfill";
import { config } from "../config";

async function main() {
  await app.listen(config.PORT);
  console.log(`Server on port ${config.PORT}`);
}

main();
