import { View, Text } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
import { windowWidth } from "../../../Constants/Dimensions";

const PasswordInput = () => {
  return (
    <View style={{ alignSelf: "center", marginTop: 15 }}>
      <Input
        placeholder="Password"
        size="large"
        style={{
          width: windowWidth - 60,
          borderColor: "#E1E1E1",
          backgroundColor: "#FAFAFA",
        }}
      />
    </View>
  );
};

export default PasswordInput;
