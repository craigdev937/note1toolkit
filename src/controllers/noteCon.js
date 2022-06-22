import mongoose from "mongoose";
import { NoteModel } from "../models/Notes.js";

class NoteClass {
    Create = async (req, res, next) => {
        try {
            const note = new NoteModel({
                title: req.body.title,
                first: req.body.first,
                last: req.body.last,
                age: req.body.age,
                info: req.body.info
            });
            await note.save();
            return res.status(200).json(note);
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        };
    };

    FetchAll = async (req, res, next) => {
        try {
            await NoteModel.find()
            .then((notes) => res.status(200)
            .json(notes));
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    GetOne = async (req, res, next) => {
        try {
            await NoteModel.findById(req.params.id)
            .then((note) => res.status(200).json(note));
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Update = async (req, res, next) => {
        try {            
            const { id } = req.params;
            const { title, first, last, age, info } = req.body;
            await NoteModel.findByIdAndUpdate(id, {
                title, first, last, age, info
            })
            res.status(200).json("The Note was Updated!");
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Delete = async (req, res, next) => {
        try {
            await NoteModel.findByIdAndDelete(req.params.id)
            .then(() => res.status(200)
            .json("The Note was Deleted!"));
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };
};

export const NOTE = new NoteClass();




