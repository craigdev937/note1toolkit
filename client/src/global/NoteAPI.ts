import { INote } from "../models/Interfaces";
import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://note1toolkit.herokuapp.com/api/notes";
export const NoteAPI = createApi({
    reducerPath: "NoteAPI",
    tagTypes: ["Note"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        fetchAll: builder.query<INote[], void>({
            query: () => "/",
            providesTags: ["Note"],
        }),
        getOne: builder.query({
            query: (_id) => `/${_id}`,
            providesTags: ["Note"],
        }),
        create: builder.mutation<INote, INote>({
            query: (payload) => ({
                url: "/",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["Note"],
        }),
        update: builder.mutation<INote, INote>({
            query: ({_id, ...payload}) => ({
                url: `/${_id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["Note"]
        }),
        delete: builder.mutation<void, string>({
            query: (_id) => ({
                url: `/${_id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Note"]
        }),
    })
});


