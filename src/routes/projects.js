import { Router } from "express";
const router = Router();

import { createProject } from "../controllers/project";

router.post("/", createProject);

export default router;
