import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { windowHeight } from "../../../Constants/Dimensions";
import { Divider } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../../Navigator/StackNavigator";
import { SignupProcessSlice } from "../../../Redux/SignupProcessSlice";
import { useDispatch } from "react-redux";

interface BackToLoginButtonProps {
  top?: number;
}

const BackToLoginButton = ({ top }: BackToLoginButtonProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const dispatch = useDispatch();
  return (
    <View
      style={{
        alignSelf: "center",
        flexDirection: "row",
        top: top ? top : windowHeight / 2.6,
      }}
    >
      <Text style={{ opacity: 0.4 }}>Already have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          dispatch(SignupProcessSlice.actions.setCurrentScreen(1));
          dispatch(
            SignupProcessSlice.actions.setEmailInputErrorStatus({
              errorCode: -1,
              errorMessage: "",
            })
          );
          dispatch(
            SignupProcessSlice.actions.setPasswordInputErrorStatus({
              errorCode: -1,
              errorMessage: "",
            })
          );
          dispatch(
            SignupProcessSlice.actions.setUsernameInputError({
              errorCode: -1,
              errorMessage: "",
            })
          );
        }}
      >
        <Text style={{ color: "#118EE3", fontWeight: "bold" }}> Log in.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackToLoginButton;
