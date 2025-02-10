import { createSlice } from "@reduxjs/toolkit";

const coursePrivacySlice = createSlice({
  name: "coursePrivacyDetail",
  initialState: {
    data: "",
  },
  reducers: {
    setCoursePrivacydata: (state, action) => {
      state.data = action.payload;
    },
    resetPrivacyData: (state, action) => {
      console.log("action", action);
      state.data = action.payload;
    },
  },
});

export const { setCoursePrivacydata, resetPrivacyData } =
  coursePrivacySlice.actions;

export default coursePrivacySlice.reducer;
