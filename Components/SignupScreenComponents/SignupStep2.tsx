import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import FullNameInput from "./SignupStep2Components/FullNameInput";
import PasswordInput from "./SignupStep2Components/PasswordInput";
import NextButton from "./NextButton";
import { windowHeight, windowWidth } from "../../Constants/Dimensions";
import BackToLoginButton from "./SignupStep1Components/BackToLoginButton";
import { Divider } from "@ui-kitten/components";

const SignupStep2 = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
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
      <FullNameInput value={fullName} onChange={setFullName} />
      {/* Password input */}
      <PasswordInput value={password} onChange={setPassword} />
      {/* Continue button */}
      <NextButton
        placeholder="Continue"
        width={windowWidth - 60}
        actionType="NameAndPassword"
        actionPayload={{ fullName: fullName, password: password }}
      />
      {/* Description text */}
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            opacity: 0.3,
            textAlign: "center",
            width: windowWidth - 30,
            top: windowHeight / 2.6,
          }}
        >
          Your contacts will be periodically synced and stored on Instagram
          servers to help you and others find friends and to help us provide a
          better service. To remove contacts, go to Settings and disconnect.
        </Text>
      </View>
      {/* Back to login button */}
      <Divider style={{ top: windowHeight / 2.5}} />
      <BackToLoginButton top={windowHeight / 2.4} />
    </SafeAreaView>
  );
};

export default SignupStep2;
