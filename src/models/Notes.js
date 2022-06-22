import mongoose from "mongoose";

const NoteSchema = mongoose.Schema({
    title: { type: String, required: true },
    first: { type: String, required: true },
    last: { type: String, required: true },
    age: { type: Number, required: true },
    info: { type: String, required: true }
});

export const NoteModel = mongoose.model("Note", NoteSchema);
// const doc = new mongoose.Model();
// doc._id instanceof mongoose.Types.ObjectId;



