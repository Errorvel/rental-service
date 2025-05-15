import { Router } from "express";
import upload from "../middleware/upload";
import { registration } from "../controllers/userControllers";

const router = new Router();

router.post('/register', upload.single('avatar'), registration);

export default router;