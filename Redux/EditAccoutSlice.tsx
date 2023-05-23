import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  EditAccountState: {
    newImageURI: "",
    newFullName: "",
    newDescription: "",
  },
};

export const EditAccountSlice = createSlice({
  name: "EditAccount",
  initialState,
  reducers: {
    setImageUri: (state, action) => {
      state.EditAccountState.newImageURI = action.payload;
    },
    setFullName: (state, action) => {
      state.EditAccountState.newFullName = action.payload;
    },

    setDescription: (state, action) => {
      state.EditAccountState.newDescription = action.payload;
    },
    setToInitialState: (state) => {
      state.EditAccountState = {
        newImageURI: "",
        newFullName: "",
        newDescription: "",
      };
    },
  },
});
