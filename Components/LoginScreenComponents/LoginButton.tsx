import { View, Text } from "react-native";
import React from "react";
import { Button } from "@ui-kitten/components";
import { windowWidth } from "../../Constants/Dimensions";

interface LoginButtonProps {
  ButtonStatus: boolean;
}

const LoginButton = ({ ButtonStatus }: LoginButtonProps) => {
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
          console.log('login')
        }
      >
        Log in
      </Button>
    </View>
  );
};

export default LoginButton;
