import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlices = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
});

export const quizzesSelector = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlices.actions;
export default quizzesSlices.reducer;