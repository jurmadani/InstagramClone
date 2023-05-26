import {
  View,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
import { windowWidth } from "../../Constants/Dimensions";
import EntypoIcon from "react-native-vector-icons/Entypo";

interface PasswordInputProps {
  secureTextEntry: boolean;
  setSecureTextEntry: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  onChangeText: (text: string) => void;
  EmailInputIsEmpty: boolean;
}

const PasswordInput = ({
  secureTextEntry,
  setSecureTextEntry,
  value,
  onChangeText,
  EmailInputIsEmpty,
}: PasswordInputProps) => {
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const EyeIcon = () => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <EntypoIcon
        name={secureTextEntry ? "eye-with-line" : "eye"}
        size={22}
        color="#C8C8C8"
      />
    </TouchableWithoutFeedback>
  );
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  return (
    <View style={{ marginTop: 10 }}>
      <Input
        placeholder="Password"
        size="large"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        accessoryRight={EyeIcon}
        disabled={EmailInputIsEmpty}
        style={{
          width: windowWidth - 20,
          borderColor: isDarkTheme ? "#414141" : "#E1E1E1",
          backgroundColor: isDarkTheme ? "#121212" : "#FAFAFA",
        }}
        textStyle={{
          color: isDarkTheme ? "white" : "black",
        }}
      />
    </View>
  );
};

export default PasswordInput;
