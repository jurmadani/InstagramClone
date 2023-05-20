import { View, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { Button } from "@ui-kitten/components";
import { windowWidth } from "../../Constants/Dimensions";
import { LoginFunction } from "../../Controllers/LoginFunction";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";

interface LoginButtonProps {
  ButtonStatus: boolean;
  email: string;
  password: string;
}

const LoginButton = ({ ButtonStatus, email, password }: LoginButtonProps) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <View>
      <Button
        style={{
          backgroundColor: "#3797EF",
          borderWidth: 0,
          width: windowWidth - 20,
          marginTop: 20,
          opacity: ButtonStatus ? 0.5 : 0.95,
        }}
        size="large"
        disabled={ButtonStatus ? true : false}
        onPress={() =>
          LoginFunction(email, password, setLoading, dispatch, navigation)
        }
      >
        {loading ? <ActivityIndicator color="white" /> : "Log in"}
      </Button>
    </View>
  );
};

export default LoginButton;
