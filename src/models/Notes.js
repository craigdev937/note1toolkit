import mongoose from "mongoose";

const NoteSchema = mongoose.Schema({
    title: { type: String, required: true },
    first: { type: String, required: true },
    last: { type: String, required: true },
    age: { type: Number, required: true },
    info: { type: String, required: true }
}, { timestamps: true });

export const NoteModel = mongoose.model("Note", NoteSchema);



