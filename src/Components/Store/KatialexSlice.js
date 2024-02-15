import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  katilex: false,
  leader: [false, false, false],
  data: [0, 0, 0],
};
const slice = createSlice({
  name: "katilex",
  initialState,
  reducers: {
    showKatilex(state, action) {
      state.katilex = !state.katilex;
    },
    updateGraphLeader(state, action) {
      state.leader = action.payload;
    },
    updateGraphData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { showKatilex, updateGraphLeader, updateGraphData } =
  slice.actions;
export default slice.reducer;
