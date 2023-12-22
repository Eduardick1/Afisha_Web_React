import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import SingleSlice from "./SingleSlice";
import FilterSlice from "./EventsSlice";
import BannersSlice from "./bannersSlice";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./paginationSlice";
import authSlice from "./authSlice";
import storage from "redux-persist/lib/storage";
import followedSlice from "./followedSlice";
import FollowedIDS from "./FollowedIDS";

const persistConfig = {
  key: "IDS_Followers",
  storage,
};

const persistSessionConfig = {
  key: "Filters",
  storage: storageSession,
};

const sessionReducers = combineReducers({
  filter: FilterSlice,
});
const storeLocalReducers = combineReducers({
  IDSfollowers: FollowedIDS,
});

const rootReducer = combineReducers({
  auth: authSlice,
  follow: followedSlice,

  localStore: persistReducer(persistConfig, storeLocalReducers),
  sessionStore: persistReducer(persistSessionConfig, sessionReducers),
  single: SingleSlice,
  banners: BannersSlice,
  pagination: paginationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const Persister = persistStore(store);
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
