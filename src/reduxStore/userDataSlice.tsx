import { createSlice } from "@reduxjs/toolkit";
import userModel from "../models/userModel";

const initialState: userModel[] = [];

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUser: (state, action) => {
      //   state = [...state, action.payload];
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser: (state, action) => {
      //   state = [...state, action.payload];
      //   state = state.filter((user) => user.id !== action.payload);
      //   console.log(state);
      const objWithIdIndex = state.findIndex(
        (obj) => obj.id === action.payload
      );

      if (objWithIdIndex > -1) {
        state.splice(objWithIdIndex, 1);
      }
    },
    updateUser: (state, action) => {
      let upd_obj = state.findIndex((obj) => obj.id == action.payload.id);
      state[upd_obj] = action.payload;
      console.log(action.payload);
    },
  },
});

export const { addUser, removeUser, updateUser } = userDataSlice.actions;
export default userDataSlice.reducer;
