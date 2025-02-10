import { createSlice } from "@reduxjs/toolkit";

const classdetailSlice = createSlice({
  name: "classDetail",
  initialState: {
    data: {},
  },
  reducers: {
    setClassData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setClassData } = classdetailSlice.actions;

export default classdetailSlice.reducer;
