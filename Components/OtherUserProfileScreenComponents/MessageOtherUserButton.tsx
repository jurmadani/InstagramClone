import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "@ui-kitten/components";
import { windowWidth } from "../../Constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
import { useSelector } from "react-redux";

const onPressHandler = () => {};

const MessageOtherUserButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <TouchableOpacity onPress={() => onPressHandler()}>
      <View
        style={{
          backgroundColor: "#E1E1E1",

          height: 33,
          width: windowWidth / 2 - 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          marginHorizontal: 5,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
          }}
        >
          Message
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageOtherUserButton;
