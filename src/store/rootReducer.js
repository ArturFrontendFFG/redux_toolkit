import { combineReducers } from "@reduxjs/toolkit";
import { reducer as favoriteReducer } from "./favorites/favorite.slice";
import { userSlice } from "./user/user.slice";
import { api } from "./api/api";

export const reducers = combineReducers({
    favorites: favoriteReducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer
})