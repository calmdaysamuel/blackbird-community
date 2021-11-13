import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "../env/environment";

const supabaseSlice = createSlice({
  name: "supabase",
  initialState: {
    supabase: createClient(
      environment.supabaseConfig.url,
      environment.supabaseConfig.clientKey
    ),
  },
  reducers: {},
});
const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    toggle: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setTrue: (state) => {
      state.isLoggedIn = true;
    },
    setFalse: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { toggle, setTrue, setFalse } = loggedInSlice.actions;
export default configureStore({
  reducer: {
    supabase: supabaseSlice.reducer,
    loggedIn: loggedInSlice.reducer,
  },
});
