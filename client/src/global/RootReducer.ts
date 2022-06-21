import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { NoteAPI } from "./NoteAPI";

export const RootReducer = configureStore({
    reducer: {
        [NoteAPI.reducerPath]: NoteAPI.reducer,
    },  // gDM = getDefaultMiddleare
    middleware: (gDM) => gDM().concat(NoteAPI.middleware)
});

setupListeners(RootReducer.dispatch);




