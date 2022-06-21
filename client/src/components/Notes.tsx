import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { NoteAPI } from "../global/NoteAPI";

export const Notes = (): JSX.Element => {
    const { error, isLoading, data } = 
    NoteAPI.useFetchAllQuery();
    const [deleteNote] = NoteAPI.useDeleteMutation();

    React.useEffect(() => {
        if (error) toast.error("Something went Wrong!");
    }, [error]);

    if (isLoading) return <h1>Loading...</h1>;

    const handleDelete = async (_id: string) => {
        if ( window.confirm("Are you sure you WANT to Delete?")
        ) {
            await deleteNote(_id);
            toast.success("The Note was deleted");
        };
    };

    return (
        <main>
            <Link to="/add">
                <button>Add Note</button>
            </Link>
            {data?.map((note) => (
                <section key={note._id}>
                    <h1>{note.title}</h1>
                    <p>{note.first} {note.last}</p>
                    <p>Age: {note.age}</p>
                    <p>Info: {note.info}</p>
                    <aside>
                        <Link to={`/edit/${note._id}`}>
                            <button>Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(note._id!)}
                            >Delete
                        </button>
                    </aside>
                </section>
            ))}
        </main>
    );
};


