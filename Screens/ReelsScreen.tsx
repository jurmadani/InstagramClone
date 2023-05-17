import { View, Image, SafeAreaView, Text } from "react-native";
import React from "react";
import { windowHeight } from "../Constants/Dimensions";

const ReelsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "flex-start" }}>
      <Image source={require("../assets/Images/no-signal-tv.gif")} />
      <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 25, marginTop:20,}}>
        No reels at the moment
      </Text>
    </SafeAreaView>
  );
};

export default ReelsScreen;
