import { View, Text } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
import { windowHeight, windowWidth } from "../../Constants/Dimensions";

interface UsernameInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const UsernameInput = ({ value, onChangeText }: UsernameInputProps) => {
  return (
    <View>
      <Input
        placeholder="Phone number, username or email"
        style={{ width: windowWidth - 20, backgroundColor: "#FAFAFA" }}
        size="large"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default UsernameInput;
