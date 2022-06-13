import express from "express";
import { NOTE } from "../controllers/noteCon.js";

export const noteRt = express.Router();
    noteRt.post("/", NOTE.Create);
    noteRt.get("/", NOTE.FetchAll);
    noteRt.get("/:id", NOTE.GetOne);
    noteRt.put("/:id", NOTE.Update);
    noteRt.delete("/:id", NOTE.Delete);


