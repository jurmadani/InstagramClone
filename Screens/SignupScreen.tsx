import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import SignupStep1 from "../Components/SignupScreenComponents/SignupStep1";
import SignupStep2 from "../Components/SignupScreenComponents/SignupStep2";

const SignupScreen = () => {
  const [stepNumber, setStepNumber] = useState(1);

  const SignupForm = () => {
    if (stepNumber === 1) return <SignupStep1 />;
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <SignupStep1 />
    </SafeAreaView>
  );
};

export default SignupScreen;
