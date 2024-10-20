import { createSlice } from "@reduxjs/toolkit";

interface TextSliceInterface {
    content: string,
}

const textSliceState = <TextSliceInterface>{
    content: "This is some text to be edited"
}

const textSlice = createSlice({
    name: "text",
    initialState: textSliceState,
    reducers: {
        editText(state,action){
            const { newText } = action.payload;

            state.content = newText;
        }
    }
})

export const textSliceActions = textSlice.actions;

export default textSlice;