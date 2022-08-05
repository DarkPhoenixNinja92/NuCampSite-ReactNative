import { configureStore } from "@reduxjs/toolkit";
import { campsitesReducer } from '../featured/campsites/campsitesSlice';
import { commentsReducer } from '../featured/comments/commentsSlice';
import { partnersReducer } from '../featured/partners/partnersSlice';
import { promotionsReducer } from '../featured/promotions/promotionsSlice';
import { favoritesReducer } from "../featured/favorites/favoritesSlice";

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer,
        favorites: favoritesReducer
    }
});