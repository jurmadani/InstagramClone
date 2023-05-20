import { View, Text } from "react-native";
import React from "react";
import { windowWidth } from "../../../Constants/Dimensions";
import { Input } from "@ui-kitten/components";
import { useSelector } from "react-redux";

interface FullNameInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const FullNameInput = ({ value, onChange }: FullNameInputProps) => {
  const fullNameInputError = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.fullNameInputError
  );
  return (
    <View style={{ alignSelf: "center", marginTop: 20 }}>
      <Input
        placeholder="Fullname"
        size="large"
        style={{
          width: windowWidth - 60,
          borderColor: fullNameInputError.errorCode === 1 ? "red" : "#E1E1E1",
          backgroundColor: "#FAFAFA",
        }}
        value={value}
        onChangeText={onChange}
      />
      <Text
        style={{
          color: "red",
          marginTop: 10,
          marginLeft: 2,
        }}
      >
        {fullNameInputError.errorMessage}
      </Text>
    </View>
  );
};

export default FullNameInput;
