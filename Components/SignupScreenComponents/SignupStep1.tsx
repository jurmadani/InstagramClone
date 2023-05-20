import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import UserIcon from "./SignupStep1Components/UserIcon";
import EmailInput from "./SignupStep1Components/EmailInput";
import NextButton from "./NextButton";
import BackToLoginButton from "./SignupStep1Components/BackToLoginButton";
import { Divider } from "@ui-kitten/components";
import { windowHeight } from "../../Constants/Dimensions";

const SignupStep1 = () => {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView>
      {/* Icon */}
      <UserIcon />
      {/* Email input */}
      <EmailInput value={email} onChange={setEmail} />
      {/* Description text */}
      <Text
        style={{
          textAlign: "center",
          opacity: 0.4,
          fontSize: 12,
          marginTop: 15,
        }}
      >
        You may receive updates via email from Instagram and can opt out at any
        time.
      </Text>
      {/* Next button */}
      <NextButton
        placeholder="Next"
        actionType="CheckIfEmailAvailable"
        actionPayload={{ email: email }}
      />
      {/* Footer */}
      <Divider style={{ height: 1, top: windowHeight / 2.8 }} />
      <BackToLoginButton />
    </SafeAreaView>
  );
};

export default SignupStep1;
