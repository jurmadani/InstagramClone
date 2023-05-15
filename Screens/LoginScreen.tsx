import {
  View,
  Text,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import InstagramTextLogoSVG from "../Components/LoginScreenComponents/InstagramTextLogoSVG";
import UsernameInput from "../Components/LoginScreenComponents/UsernameInput";
import PasswordInput from "../Components/LoginScreenComponents/PasswordInput";
import ForgotPasswordButton from "../Components/LoginScreenComponents/ForgotPasswordButton";
import LoginButton from "../Components/LoginScreenComponents/LoginButton";
import OrDivider from "../Components/LoginScreenComponents/OrDivider";
import ConnectWithFacebookButton from "../Components/LoginScreenComponents/ConnectWithFacebookButton";
import SimpleDivider from "../Components/LoginScreenComponents/SimpleDivider";
import SignUpButton from "../Components/LoginScreenComponents/SignUpButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [EmailInputIsEmpty, setEmailInputState] = useState(true); // for the password input
  const [LoginStatus, SetLoginStatus] = useState(true); // first the login button is disabled till password & email is completed
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    if (email === "" || email.length < 3) setEmailInputState(true);
    else if (email.length >= 3) setEmailInputState(false);
  }, [email]);

  useEffect(() => {
    if (email != "" && password != "") SetLoginStatus(false);
    else SetLoginStatus(true);
  }, [email, password]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isDarkTheme ? "black" : "white",
          }}
        >
          <View style={{ bottom: 50 }}>
            {/* Instagram text logo as a svg component */}
            <InstagramTextLogoSVG />
          </View>
          <View>
            {/* Username/phone number/ email input */}
            <UsernameInput value={email} onChangeText={setEmail} />
            {/*Password input */}
            <PasswordInput
              value={password}
              secureTextEntry={secureTextEntry}
              setSecureTextEntry={setSecureTextEntry}
              onChangeText={setPassword}
              EmailInputIsEmpty={EmailInputIsEmpty}
            />
          </View>
          {/* Forgot password button */}
          <ForgotPasswordButton />
          {/* Login button */}
          <LoginButton ButtonStatus={LoginStatus} />
          {/* Divider */}
          <OrDivider />
          {/* Connect with facebook button */}
          <ConnectWithFacebookButton />
          {/* Simple divider  */}
          <SimpleDivider />
          {/* Signup button */}
          <SignUpButton />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
