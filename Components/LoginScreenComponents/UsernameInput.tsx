import { View, Text, useColorScheme } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
import { windowHeight, windowWidth } from "../../Constants/Dimensions";

interface UsernameInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const UsernameInput = ({ value, onChangeText }: UsernameInputProps) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  return (
    <View>
      <Input
        placeholder="Phone number, username or email"
        style={{
          width: windowWidth - 20,
          borderColor: isDarkTheme ? "#414141" : "#E1E1E1",
          backgroundColor: isDarkTheme ? "#121212" : "#FAFAFA",
        }}
        size="large"
        onChangeText={onChangeText}
        value={value}
        textStyle={{
          color: isDarkTheme ? "white" : "black",
        }}
      />
    </View>
  );
};

export default UsernameInput;
