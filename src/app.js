import express, { json } from "express";
import morgan from "morgan";

//Importing routes
import projectRoutes from "./routes/users";

//Initialization
const app = express();

// middleware
app.use(morgan("dev"));
app.use(json());

//routes
app.use("/api/users", projectRoutes);

export default app;
