import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import SignupStep1 from "../Components/SignupScreenComponents/SignupStep1";
import SignupStep2 from "../Components/SignupScreenComponents/SignupStep2";
import SignupStep3 from "../Components/SignupScreenComponents/SignupStep3";
import SignupStep4 from "../Components/SignupScreenComponents/SignupStep4";
import { useSelector, useDispatch } from "react-redux";

const SignupScreen = () => {
  const currentScreen = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.currentScreen
  );
  const SignupForm = () => {
    if (currentScreen === 1) {
      return <SignupStep1 />;
    } else if (currentScreen === 2) {
      return <SignupStep2 />;
    } else if (currentScreen === 3) {
      return <SignupStep3 />;
    } else if (currentScreen === 4) {
      return <SignupStep4 />;
    } else {
      // Return some default or placeholder JSX element here
      return null;
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <SignupForm />
    </SafeAreaView>
  );
};

export default SignupScreen;
