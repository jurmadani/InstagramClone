import { View, Text } from "react-native";
import React from "react";
import { windowHeight, windowWidth } from "../../Constants/Dimensions";
import NextButton from "./NextButton";
import ChangeUsernameButton from "./SignupStep3Components/ChangeUsernameButton";
import BackToLoginButton from "./SignupStep1Components/BackToLoginButton";
import { Divider } from "@ui-kitten/components";

const SignupStep3 = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 100 }}>
      {/* Header text */}
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
        WELCOME TO INSTAGRAM,
      </Text>
      {/* User username */}
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>d.jurma</Text>
      {/* Description text */}
      <Text
        style={{
          opacity: 0.4,
          textAlign: "center",
          width: windowWidth - 50,
          marginTop: 10,
        }}
      >
        Find people to follow and start sharing photos. You can change your
        username at any time.
      </Text>
      {/* Next button */}
      <NextButton placeholder="Next" width={windowWidth - 60} />
      {/* Change username button */}
      <ChangeUsernameButton />
      {/* Footer description */}
      <Text
        style={{
          opacity: 0.4,
          textAlign: "center",
          width: windowWidth - 50,
          top: windowHeight / 2.5,
        }}
      >
        By clicking Next, you agree to our{" "}
        <Text style={{ fontWeight: "bold", color: "#118EE3", opacity: 1 }}>
          Terms
        </Text>
        . Learn how we collect, use and share your data in our{" "}
        <Text style={{ fontWeight: "bold", color: "#118EE3", opacity: 1 }}>
          Data Policy
        </Text>
        , and how we use cookies and similar technology in our{" "}
        <Text style={{ fontWeight: "bold", color: "#118EE3", opacity: 1 }}>
          Cookie Policy
        </Text>
        .
      </Text>
      <Divider style={{ width: windowWidth, top: windowHeight / 2.35 }} />
      {/* Back to login */}
      <Divider />
      <BackToLoginButton top={windowHeight / 2.3} />
    </View>
  );
};

export default SignupStep3;
