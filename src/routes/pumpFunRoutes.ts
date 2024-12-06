import { Router } from "express";
import { getMint } from "../controllers/pumpFunController";

const router = Router();

router.get("/:mint", getMint);

export default router;