import { View, Text } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
import { windowWidth } from "../../../Constants/Dimensions";
import { useSelector } from "react-redux";

interface PasswordInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  const passwordInputError = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.passwordInputError
  );

  return (
    <View style={{ alignSelf: "center", marginTop: 15 }}>
      <Input
        placeholder="Password"
        size="large"
        style={{
          width: windowWidth - 60,
          borderColor: passwordInputError.errorCode === 1 ? "red" : "#E1E1E1",
          backgroundColor: "#FAFAFA",
        }}
        value={value}
        onChangeText={onChange}
        secureTextEntry={true}
      />
      <Text
        style={{
          color: "red",
          marginTop: 10,
          marginLeft: 2,
          textAlign: "center",
          width: windowWidth - 60,
        }}
      >
        {passwordInputError.errorMessage}
      </Text>
    </View>
  );
};

export default PasswordInput;
