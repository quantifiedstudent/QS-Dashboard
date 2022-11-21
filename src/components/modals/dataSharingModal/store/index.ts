import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { User } from "@Services/api/dto/users";

interface DataSharingModal {
  peers: Array<User>;
}

const state: DataSharingModal = {
  peers: new Array<User>(),
};

export const datasharingSlice = createSlice({
  name: "datasharing",
  initialState: state,
  reducers: {
    addPeer: (state: DataSharingModal, action: PayloadAction<User>) => {
      state.peers.push(action.payload);
    },
  },
});

export const { addPeer } = datasharingSlice.actions;

export default datasharingSlice.reducer;
