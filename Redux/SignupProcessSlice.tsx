import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentScreen: 1,
  emailInputError: {
    errorCode: -1,
    errorMessage: "",
  },
  fullNameInputError: {
    errorCode: -1,
    errorMessage: "",
  },
  usernameInputError: {
    errorCode: -1,
    errorMessage: "",
  },
  passwordInputError: {
    errorCode: -1,
    errorMessage: "",
  },
  currentUserInformation: {
    email: "",
    password: "",
    fullName: "",
    username: "",
    image: "",
  },
};

export const SignupProcessSlice = createSlice({
  name: "SignupProcess",
  initialState,
  reducers: {
    setCurrentScreen: (state, action) => {
      if (action.payload === 6) console.log("sign up process completed");
      else state.currentScreen = action.payload;
    },
    setEmailInputErrorStatus: (state, action) => {
      state.emailInputError = action.payload;
    },
    setFullNameInputErrorStatus: (state, action) => {
      state.fullNameInputError = action.payload;
    },
    setUsernameInputError: (state, action) => {
      state.usernameInputError = action.payload;
    },
    setPasswordInputErrorStatus: (state, action) => {
      state.passwordInputError = action.payload;
    },
    setCurrentUserEmail: (state, action) => {
      state.currentUserInformation.email = action.payload;
    },
    setCurrentUserPassword: (state, action) => {
      state.currentUserInformation.password = action.payload;
    },
    setCurrentUserFullName: (state, action) => {
      state.currentUserInformation.fullName = action.payload;
    },
    setCurrentUserUsername: (state, action) => {
      state.currentUserInformation.username = action.payload;
    },
    setCurrentUserImage: (state, action) => {
      state.currentUserInformation.image = action.payload;
    },
  },
});
