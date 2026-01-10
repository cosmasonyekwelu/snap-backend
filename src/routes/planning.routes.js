import express from "express";
import { planningController } from "../controllers/planning.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", planningController.create);
router.get("/", planningController.getAll);
router.get("/:id", planningController.getOne);
router.put("/:id", planningController.update);
router.delete("/:id", planningController.remove);

export default router;
