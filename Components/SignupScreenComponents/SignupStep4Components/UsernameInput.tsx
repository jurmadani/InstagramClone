import { View, Text } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
import { windowWidth } from "../../../Constants/Dimensions";

const UsernameInput = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Input
        placeholder="Username"
        style={{
          width: windowWidth - 50,
          borderColor: "#E1E1E1",
          backgroundColor: "#FAFAFA",
        }}
        size="large"
      />
    </View>
  );
};

export default UsernameInput;
