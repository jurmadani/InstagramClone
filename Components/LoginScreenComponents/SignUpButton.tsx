import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";

const SignUpButton = () => {
  return (
    <View style={{ top: windowWidth / 2.2, flexDirection: "row" }}>
      <Text style={{ color: "#979797" }}>Don't have an account?</Text>
      <TouchableOpacity style={{ borderWidth: 0 }}>
        <Text
          style={{
            color: "#118EE3",
            fontWeight: "bold",
            marginLeft:5,
          }}
        >
          Sign up.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpButton;
