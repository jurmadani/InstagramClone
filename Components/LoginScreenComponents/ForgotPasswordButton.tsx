import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";

const ForgotPasswordButton = () => {
  return (
    <TouchableOpacity style={{ alignSelf:'flex-end'}}>
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
