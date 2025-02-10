import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tabdata",
  initialState: {
    tab: "Klasės",
  },
  reducers: {
    setTabData: (state, action) => {
      state.tab = action.payload;
    },
    resetTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { setTabData, resetTab } = tabSlice.actions;

export default tabSlice.reducer;
