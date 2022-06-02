import { createSlice } from "@reduxjs/toolkit";

export interface ApplicationState {
  count: number;
}

const initialState: ApplicationState = {
  count: 0,
};

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
  },
});

export const actions = {
  ...applicationSlice.actions,
};

export default applicationSlice.reducer;
