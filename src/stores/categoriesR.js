import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Create the async thunk for loading categories
export const loadCategories = createAsyncThunk(
  'categories/loadCategories',
  async () => {
    const response = await fetch('https://run.mocky.io/v3/2205b6dc-5252-49e1-8a97-e486fc69fb8a');
    const data = await response.json();
    return data;
  }
);

// Create the slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: [], status: true },
  reducers: {},
  extraReducers: (builder) => {
      
    builder.addCase(loadCategories.fulfilled, (state, action) => {
      state.status = false;
      state.categories = action.payload;
    });
  }
});

// Extract the reducer
const categoriesReducer = categoriesSlice.reducer;

export default categoriesReducer;