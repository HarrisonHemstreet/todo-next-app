import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function

export default todosSlice.reducer
