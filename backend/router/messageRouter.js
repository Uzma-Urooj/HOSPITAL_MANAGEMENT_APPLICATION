import express from "express";
import { getAllMessages, sendMessage } from "../controller/messageController.js";
import _default from "validator";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getAll",isAdminAuthenticated, getAllMessages);


export default router;
