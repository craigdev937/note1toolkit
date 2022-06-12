import express from "express";
import { IndexHome } from "../controllers/noteCon.js";

export const noteRt = express.Router();
    noteRt.get("/", IndexHome);



