import { Router } from "express";
const router = Router();

import { deleteUser, create, getAll } from "../controllers/user";

router.post("/", create);
router.get("/", getAll);
router.delete("/:id", deleteUser);

export default router;
