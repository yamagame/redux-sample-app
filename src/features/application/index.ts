import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ApplicationState {
  count: number;
  limit: number;
}

const initialState: ApplicationState = {
  count: 0,
  limit: 0,
};

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    reset: (state) => {
      console.log("reset");
      state.count = 0;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    increment: (state) => {
      const count = state.count + 1;
      console.log("increment", count, new Date().getTime());
      state.count = count;
      if (state.limit > 0 && state.count > state.limit) {
        state.count = 0;
      }
    },
    setCount: (state, action: PayloadAction<number>) => {
      console.log("setCount", action.payload, new Date().getTime());
      state.count = action.payload;
      if (state.limit > 0 && state.count > state.limit) {
        state.count = 0;
      }
    },
  },
});

export const actions = {
  ...applicationSlice.actions,
};

export default applicationSlice.reducer;
