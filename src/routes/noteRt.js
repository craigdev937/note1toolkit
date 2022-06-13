import express from "express";
import { NOTE } from "../controllers/noteCon.js";

export const noteRt = express.Router();
    noteRt.post("/", NOTE.Create);
    noteRt.get("/", NOTE.FetchAll);



