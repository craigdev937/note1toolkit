import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { NoteAPI } from "../global/NoteAPI";

const initialState = {
    title: "", first: "", last: "",
    age: 0, info: ""
};

export const AddEdit = (): JSX.Element => {
    const navigate = useNavigate();
    const [formValue, setFormValue] = React.useState(initialState);
    const [editMode, setEditMode] = React.useState(false);
    const [addNote] = NoteAPI.useCreateMutation();
    const [updateNote] = NoteAPI.useUpdateMutation();

    const { title, first, last, age, info } = formValue;
    const { _id } = useParams();
    const { error, data } = NoteAPI.useGetOneQuery(_id!);

    React.useEffect(() => {
        if (error && _id) {
            toast.error("Something went Wrong!");
        };        
    }, [error]);

    React.useEffect(() => {
        if (_id) {
            setEditMode(true);
            if (data) {
                setFormValue({...data});
            };
        } else {
            setEditMode(false);
            setFormValue({...initialState});
        }
    }, [_id, data]);

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({...formValue, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit =
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!title && !first && !last && !age && !info) {
            toast.error("Please enter the info");
        } else {
            if (!editMode) {
                await addNote(formValue);
                navigate("/");
                toast.success("The Note was added!");
            } else {
                await updateNote(formValue);
                navigate("/");
                setEditMode(false);
                toast.success("The Note was updated!");
            }
        }
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    id="title"
                    name="title"
                    placeholder="Enter the Title..."
                    value={title}
                    onChange={handleChange}
                />
                <label htmlFor="first">First</label>
                <input 
                    type="text" 
                    id="first"
                    name="first"
                    placeholder="First Name"
                    value={first}
                    onChange={handleChange}
                />
                <label htmlFor="last">Last</label>
                <input 
                    type="text" 
                    id="last"
                    name="last"
                    placeholder="Last Name"
                    value={last}
                    onChange={handleChange}
                />
                <label htmlFor="age">Age</label>
                <input 
                    type="number" 
                    id="age"
                    name="age"
                    placeholder="Age"
                    value={age}
                    onChange={handleChange}
                />
                <label htmlFor="info">Info</label>
                <input 
                    type="text" 
                    id="info"
                    name="info"
                    placeholder="Info"
                    value={info}
                    onChange={handleChange}
                />
                <input 
                    type="submit" 
                    value={editMode ? "Update" : "Create"}
                />
            </form>
        </main>
    );
};


