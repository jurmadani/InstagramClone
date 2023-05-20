import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignupProcessSlice } from "../../../Redux/SignupProcessSlice";

const ChangeUsernameButton = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={{ marginTop: 15 }}
      onPress={() => dispatch(SignupProcessSlice.actions.setCurrentScreen(4))}
    >
      <View>
        <Text style={{ color: "#118EE3", fontWeight: "bold" }}>
          Change username
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChangeUsernameButton;
