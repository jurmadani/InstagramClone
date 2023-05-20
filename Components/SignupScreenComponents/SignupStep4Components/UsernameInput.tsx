import { View, Text } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
import { windowWidth } from "../../../Constants/Dimensions";
import { useSelector } from "react-redux";
//@ts-ignore
import AntDesign from "react-native-vector-icons/AntDesign";

interface UsernameInputProps {
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
}

const UsernameInput = ({ value, onChangeText }: UsernameInputProps) => {
  const usernameInputError = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.usernameInputError
  );

  const CheckIcon = () => <AntDesign name="check" size={24} color="green" />;

  return (
    <View style={{ marginTop: 20 }}>
      <Input
        placeholder="Username"
        style={{
          width: windowWidth - 50,
          borderColor:
            usernameInputError.errorCode === 1 ||
            usernameInputError.errorCode === 2
              ? "red"
              : "#E1E1E1",
          backgroundColor: "#FAFAFA",
        }}
        value={value}
        onChangeText={onChangeText}
        size="large"
        accessoryRight={usernameInputError.errorCode === 3 ? CheckIcon : null}
      />
      <Text
        style={{
          marginTop: 10,
          color: usernameInputError.errorCode === 3 ? "green" : "red",
          fontSize: 11,
        }}
      >
        {usernameInputError.errorMessage}
      </Text>
    </View>
  );
};

export default UsernameInput;
