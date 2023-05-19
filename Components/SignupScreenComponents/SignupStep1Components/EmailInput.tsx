import { View, Text } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
import { windowWidth } from "../../../Constants/Dimensions";

const EmailInput = () => {
  return (
    <View style={{ alignSelf: "center", marginTop: 20 }}>
      <Input
        placeholder="Email"
        size="large"
        style={{
          width: windowWidth - 20,
          borderColor: "#E1E1E1",
          backgroundColor: "#FAFAFA",
        }}
      />
    </View>
  );
};

export default EmailInput;
