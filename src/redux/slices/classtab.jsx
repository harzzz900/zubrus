import { createSlice } from "@reduxjs/toolkit";

const classtabSlice = createSlice({
  name: "classtabs",
  initialState: {
    data: "overview",
  },
  reducers: {
    setTabData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setTabData } = classtabSlice.actions;

export default classtabSlice.reducer;
