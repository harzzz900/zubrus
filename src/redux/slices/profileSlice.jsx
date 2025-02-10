import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: "profileData",
  initialState: {
    profileData: {},
    loading: false,
    error: null,
    language: "lt",
  },
  reducers: {
    setProfileData: (state, action) => {
      state.profileData = action.payload;
      state.loading = false;
      state.error = null;
    },
    resetProfile: (state) => {
      state.data = {};
      state.loading = false;
      state.error = null;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { resetProfile, setProfileData, setLanguage } =
  profileSlice.actions;

export default profileSlice.reducer;