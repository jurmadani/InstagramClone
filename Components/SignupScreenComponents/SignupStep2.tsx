import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import FullNameInput from "./SignupStep2Components/FullNameInput";
import PasswordInput from "./SignupStep2Components/PasswordInput";
import NextButton from "./NextButton";
import { windowHeight, windowWidth } from "../../Constants/Dimensions";
import BackToLoginButton from "./SignupStep1Components/BackToLoginButton";
import { Divider } from "@ui-kitten/components";

const SignupStep2 = () => {
  return (
    <SafeAreaView style={{}}>
      {/* Header text */}
      <Text
        style={{
          textAlign: "center",
          fontSize: 17,
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        NAME AND PASSWORD
      </Text>
      {/* Full name input */}
      <FullNameInput />
      {/* Password input */}
      <PasswordInput />
      {/* Continue button */}
      <NextButton placeholder="Continue" width={windowWidth - 60} />
      {/* Description text */}
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            opacity: 0.3,
            textAlign: "center",
            width: windowWidth - 30,
            top: windowHeight / 2.3,
          }}
        >
          Your contacts will be periodically synced and stored on Instagram
          servers to help you and others find friends and to help us provide a
          better service. To remove contacts, go to Settings and disconnect.
        </Text>
      </View>
      {/* Back to login button */}
      <Divider style={{ top: windowHeight / 2.20}} />
      <BackToLoginButton top={windowHeight / 2.1} />
    </SafeAreaView>
  );
};

export default SignupStep2;
