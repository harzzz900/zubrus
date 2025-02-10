import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './slices/profileSlice';
import bannerSlice from './slices/bannerSlice';
import tabSlice from './slices/tabSlice';
import classdetailSlice from './slices/classdetailSlice';
import subjectSlice from './slices/subjectSlice';
import coursePrivacySlice from './slices/coursePrivacySlice';
import classtabSlice from './slices/classtab';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const persistConfig = {
  key: 'root',  // Key to persist the entire Redux state
  storage,      // The type of storage (e.g., localStorage)
};

// Combine all reducers
const rootReducer = combineReducers({
  profileData: profileSlice,  // Your slice reducers
  bannerData: bannerSlice,
  tabData: tabSlice,
  classData: classdetailSlice,
  coursePrivacyData: coursePrivacySlice,
  classtabData: classtabSlice,
  subjectData: subjectSlice
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer,  // Use persisted reducer instead of rootReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
