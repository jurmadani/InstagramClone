import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";
import { Button } from "@ui-kitten/components";

interface NextButtonProps {
  placeholder: string;
  width?: number;
}

const NextButton = ({ placeholder, width }: NextButtonProps) => {
  return (
    <View style={{ alignSelf: "center" }}>
      <Button
        style={{
          backgroundColor: "#3797EF",
          borderWidth: 0,
          width: width ? width : windowWidth - 20,
          marginTop: 20,
        }}
        size="large"
      >
        {placeholder}
      </Button>
    </View>
  );
};

export default NextButton;
