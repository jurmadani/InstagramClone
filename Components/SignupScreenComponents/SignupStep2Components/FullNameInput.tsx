import { View, Text } from "react-native";
import React from "react";
import { windowWidth } from "../../../Constants/Dimensions";
import { Input } from "@ui-kitten/components";

const FullNameInput = () => {
  return (
    <View style={{ alignSelf: "center", marginTop: 20 }}>
      <Input
        placeholder="Fullname"
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

export default FullNameInput;
