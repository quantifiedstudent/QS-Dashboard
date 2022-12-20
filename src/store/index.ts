import { configureStore } from "@reduxjs/toolkit";
//import Dashboard from "@Components/modals/addGraphModal/store";
import Datasharing from "@Components/modals/dataSharingModal/store";
import DataSources from "@Components/modals/datasourceConfigurationModal/store";

const store = configureStore({
  reducer: {
    datasharing: Datasharing,
    //dashboard: Dashboard,
    datasources: DataSources,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
