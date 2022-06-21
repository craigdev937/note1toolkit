import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notes } from "../components/Notes";
import { Info } from "../components/Info";
import { AddEdit } from "../containers/AddEdit";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Notes />} />
                <Route path="/add" element={<AddEdit />} />
                <Route path="/edit/:id" element={<AddEdit />} />
                <Route path="/info/:id" element={<Info />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


