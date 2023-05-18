import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ChangeUsernameButton = () => {
  return (
    <TouchableOpacity style={{ marginTop: 15 }}>
      <View>
        <Text style={{ color: "#118EE3", fontWeight: "bold" }}>
          Change username
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChangeUsernameButton;
