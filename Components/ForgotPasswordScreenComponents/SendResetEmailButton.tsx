import { View, Text } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";
import { Button } from "@ui-kitten/components";

interface SendResetEmailButtonProps {
  ButtonStatus: boolean;
}

const SendResetEmailButton = ({ ButtonStatus }: SendResetEmailButtonProps) => {
  return (
    <View style={{ alignSelf: "center" }}>
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
        onPress={() => console.log("login test")}
      >
        Next
      </Button>
    </View>
  );
};

export default SendResetEmailButton;
