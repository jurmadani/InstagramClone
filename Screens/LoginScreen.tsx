import {
  View,
  Text,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import InstagramTextLogoSVG from "../Components/LoginScreenComponents/InstagramTextLogoSVG";
import { Input } from "@ui-kitten/components";
import UsernameInput from "../Components/LoginScreenComponents/UsernameInput";
import PasswordInput from "../Components/LoginScreenComponents/PasswordInput";
import ForgotPasswordButton from "../Components/LoginScreenComponents/ForgotPasswordButton";
import LoginButton from "../Components/LoginScreenComponents/LoginButton";
import OrDivider from "../Components/LoginScreenComponents/OrDivider";
import ConnectWithFacebookButton from "../Components/LoginScreenComponents/ConnectWithFacebookButton";
import SimpleDivider from "../Components/LoginScreenComponents/SimpleDivider";
import SignUpButton from "../Components/LoginScreenComponents/SignUpButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../Navigator/StackNavigator";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [EmailInputIsEmpty, setEmailInputState] = useState(true); // for the password input
  const [LoginStatus, SetLoginStatus] = useState(true); // first the login button is disabled till password & email is completed
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  useEffect(() => {
    if (email === "" || email.length < 3) setEmailInputState(true);
    else if (email.length >= 3) setEmailInputState(false);
  }, [email]);

  useEffect(() => {
    if (email != "" && password != "") SetLoginStatus(false);
    else SetLoginStatus(true);
  }, [email, password]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
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
  );
};

export default LoginScreen;
