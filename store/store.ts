import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./textSlice";

const store = configureStore({
    reducer: {
        text: textSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;