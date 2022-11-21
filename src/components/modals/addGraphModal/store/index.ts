import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BaseQsGraphShape } from "@Services/graph/QSGraphs";

interface DashboardState {
  graphs: Array<BaseQsGraphShape>;
}

const initialState: DashboardState = {
  graphs: new Array<BaseQsGraphShape>(),
};

export const dashboardSlice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {
    addGraph: (
      state: DashboardState,
      action: PayloadAction<BaseQsGraphShape>
    ) => {
      state.graphs.push(action.payload);
    },
  },
});

export const { addGraph } = dashboardSlice.actions;
export const getGraphs = (state: DashboardState) => state.graphs;

export default dashboardSlice.reducer;
