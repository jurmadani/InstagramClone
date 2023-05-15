import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";

const ForgotPasswordButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <TouchableOpacity
      style={{ alignSelf: "flex-end" }}
      onPress={() => navigation.navigate("ForgotPassword")}
    >
      <View>
        <Text
          style={{
            color: "#118EE3",
            fontWeight: "bold",
            textAlign: "right",
            marginRight: windowWidth - (windowWidth - 15),
            marginTop: 10,
          }}
        >
          Forgot password?
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ForgotPasswordButton;
