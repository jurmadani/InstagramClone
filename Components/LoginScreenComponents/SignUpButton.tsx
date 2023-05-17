import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";

const SignUpButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <View style={{ top: windowWidth / 2.2, flexDirection: "row" }}>
      <Text style={{ color: "#979797" }}>Don't have an account?</Text>
      <TouchableOpacity
        style={{ borderWidth: 0 }}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text
          style={{
            color: "#118EE3",
            fontWeight: "bold",
            marginLeft: 5,
          }}
        >
          Sign up.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpButton;
