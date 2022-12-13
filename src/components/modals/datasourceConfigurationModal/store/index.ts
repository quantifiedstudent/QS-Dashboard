import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../../store";
import { BaseQsGraphShape, QsGraph } from "@Services/graph/QSGraphs";
import {
  AvailableDatasources,
  BaseDatasource,
  CanvasDatasource,
} from "@Services/api/dto/datasource";

type DatasourceState = {
  [key in AvailableDatasources]: BaseDatasource | null;
};

const initialState: DatasourceState = {
  canvas: null,
};

export const datasourceSlice = createSlice({
  name: "Datasources",
  initialState,
  reducers: {
    setDatasource: (
      state: DatasourceState,
      action: PayloadAction<CanvasDatasource>
    ) => {
      state[action.payload.name] = action.payload;
    },
  },
});

export const { setDatasource } = datasourceSlice.actions;

export default datasourceSlice.reducer;
