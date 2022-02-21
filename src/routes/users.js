import { Router } from "express";
const router = Router();

import { deleteUser, create, getAll, modifyUser } from "../controllers/user";

router.post("/", create);
router.get("/", getAll);
router.delete("/:id", deleteUser);
router.patch("/:id", modifyUser);

export default router;
