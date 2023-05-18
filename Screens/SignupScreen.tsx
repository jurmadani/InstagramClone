import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import SignupStep1 from "../Components/SignupScreenComponents/SignupStep1";
import SignupStep2 from "../Components/SignupScreenComponents/SignupStep2";
import SignupStep3 from "../Components/SignupScreenComponents/SignupStep3";
import SignupStep4 from "../Components/SignupScreenComponents/SignupStep4";

const SignupScreen = () => {
  const [stepNumber, setStepNumber] = useState(1);

  const SignupForm = () => {
    if (stepNumber === 1) return <SignupStep1 />;
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <SignupStep4 />
    </SafeAreaView>
  );
};

export default SignupScreen;
