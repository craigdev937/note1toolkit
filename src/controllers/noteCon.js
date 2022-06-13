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
};

export const NOTE = new NoteClass();




