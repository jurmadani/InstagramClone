import { View, Text } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
import { windowWidth } from "../../../Constants/Dimensions";
import { useSelector } from "react-redux";

interface EmailInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const EmailInput = ({ value, onChange }: EmailInputProps) => {
  const InputErrorStatus = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.emailInputError
  );
  return (
    <View style={{ alignSelf: "center", marginTop: 20 }}>
      <Input
        placeholder="Email"
        size="large"
        style={{
          width: windowWidth - 20,
          borderColor:
            InputErrorStatus.errorCode === 1 || InputErrorStatus.errorCode === 2
              ? "red"
              : "#E1E1E1",
          backgroundColor: "#FAFAFA",
        }}
        value={value}
        onChangeText={onChange}
      />
      <Text
        style={{
          color:
            InputErrorStatus.errorCode === 1 || InputErrorStatus.errorCode === 2
              ? "red"
              : "green",
          marginTop: 10,
          marginLeft: 2,
        }}
      >
        {InputErrorStatus.errorCode === -1
          ? ''
          : InputErrorStatus.errorMessage}
      </Text>
    </View>
  );
};

export default EmailInput;
