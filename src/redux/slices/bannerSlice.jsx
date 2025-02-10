import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
  name: "bannerdata",
  initialState: {
    profileData: {},
    visible: true,
    error: null,
  },
  reducers: {
    setBannerData: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export const { setBannerData } = bannerSlice.actions;

export default bannerSlice.reducer;
