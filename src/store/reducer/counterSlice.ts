import {createSlice, createAsyncThunk, isAnyOf} from '@reduxjs/toolkit';

interface CounterState {
    oneCounter: number;
    twoCounter: number;
    loading: boolean;
    error: string | null;
}

const initialState: CounterState = {
    oneCounter: 0,
    twoCounter: 0,
    loading: false,
    error: null,
};

export const fetchIncrementOneCounter = createAsyncThunk(
    'counterOne', async (current: number) =>
        new Promise<number>(resolve => resolve(current + 1)));

export const fetchIncrementTwoCounter = createAsyncThunk(
    'counterTwo', async (current: number) =>
        new Promise<number>(resolve => resolve(current + 1)));

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchIncrementOneCounter.fulfilled, (state, action) => {
                state.loading = false;
                state.oneCounter = action.payload;
            })
            .addCase(fetchIncrementTwoCounter.fulfilled, (state, action) => {
                state.loading = false;
                state.twoCounter = action.payload;
            })
            .addMatcher(isAnyOf(fetchIncrementOneCounter.pending, fetchIncrementTwoCounter.pending), (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(isAnyOf(fetchIncrementOneCounter.rejected, fetchIncrementTwoCounter.rejected), (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred';
            });
    },
});

export default weatherSlice.reducer;