import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = "";
const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setContactFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { setContactFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;