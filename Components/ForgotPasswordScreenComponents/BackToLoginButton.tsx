import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { windowHeight } from "../../Constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";

const BackToLoginButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <View style={{ alignItems: "center", top: windowHeight / 29 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ color: "#118EE3", fontWeight: "bold" }}>
          Back to log in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackToLoginButton;
