import { configureStore } from "@reduxjs/toolkit";
import gitUserReducer from "./slice/githubUserSlice"

export const store = configureStore({
    reducer:{
        gitUser:gitUserReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch