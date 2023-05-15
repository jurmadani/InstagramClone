import {
  View,
  SafeAreaView,
  useColorScheme,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import LockIcon from "../Components/ForgotPasswordScreenComponents/LockIcon";
import { Divider, Text } from "@ui-kitten/components";
import { windowHeight, windowWidth } from "../Constants/Dimensions";
import UsernameInput from "../Components/LoginScreenComponents/UsernameInput";
import SendResetEmailButton from "../Components/ForgotPasswordScreenComponents/SendResetEmailButton";
import OrDivider from "../Components/LoginScreenComponents/OrDivider";
import ConnectWithFacebookButton from "../Components/LoginScreenComponents/ConnectWithFacebookButton";
import BackToLoginButton from "../Components/ForgotPasswordScreenComponents/BackToLoginButton";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [buttonStatus, setButtonStatus] = useState(true);

  useEffect(() => {
    if (email != "" && email.length >= 3) setButtonStatus(false);
    else setButtonStatus(true);
  }, [email]);
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: isDarkTheme ? "black" : "white" }}
      >
        {/* Lock icon */}
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <LockIcon />
        </View>
        {/* Header text */}
        <Text
          category="h6"
          style={{
            textAlign: "center",
            marginTop: 20,
            fontWeight: "600",
            color: isDarkTheme ? "white" : "black",
          }}
        >
          Trouble logging in?
        </Text>
        {/* Description text */}
        <Text
          style={{
            textAlign: "center",
            width: windowWidth / 1.2,
            marginTop: 10,
            alignSelf: "center",
            color: isDarkTheme ? "white" : "black",
          }}
        >
          Enter your email and we'll send you a link to get back your account.
        </Text>
        {/* Username input */}
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <UsernameInput value={email} onChangeText={setEmail} />
        </View>
        {/* Send reset email buttoon */}
        <View style={{ marginTop: 30 }}>
          <SendResetEmailButton ButtonStatus={buttonStatus} />
        </View>
        {/* OR Divider */}
        <View style={{ marginTop: 30 }}>
          <OrDivider />
        </View>
        {/* Connect with facebook option/button */}
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <ConnectWithFacebookButton />
        </View>
        {/* Simple divider */}
        <View style={{ marginTop: windowHeight / 6.3 }}>
          <Divider />
          {/* Back to login button */}
          <BackToLoginButton />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;
