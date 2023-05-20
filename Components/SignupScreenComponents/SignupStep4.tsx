import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { windowWidth } from "../../Constants/Dimensions";
import UsernameInput from "./SignupStep4Components/UsernameInput";
import NextButton from "./NextButton";
import BackToLoginButton from "./SignupStep1Components/BackToLoginButton";
import { Divider } from "@ui-kitten/components";
import { useSelector } from "react-redux";

const SignupStep4 = () => {
  const [newUsername, setNewUsername] = useState("");
  const usernameInputError = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.usernameInputError
  );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        {/* Header text */}
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          CHANGE USERNAME
        </Text>
        {/* Description text */}
        <Text
          style={{
            opacity: 0.4,
            marginTop: 10,
            width: windowWidth - 50,
            textAlign: "center",
          }}
        >
          Choose a username for your account. You can always change it later.
        </Text>
        {/* Username input */}
        <UsernameInput value={newUsername} onChangeText={setNewUsername} />
        {/* Next button */}
        <NextButton
          placeholder="Next"
          width={windowWidth - 50}
          actionType="ContinueSignupProcessWithCustomUsername"
          actionPayload={{ username: newUsername }}
        />
        {/* Back to login */}
        <Divider style={{ width: windowWidth, top: windowWidth / 1.9 }} />
        <BackToLoginButton top={windowWidth / 1.7} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupStep4;
