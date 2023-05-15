import { View, Text } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";

const OrDivider = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Prima linie */}
      <View
        style={{
          height: 1,
          width: windowWidth / 2 - 40,
          backgroundColor: "#E1E1E1",
        }}
      />
      <Text style={{ color: "#ABB3BB", margin: 20 }}>OR</Text>
      {/* A 2-a linie */}

      <View
        style={{
          height: 1,
          width: windowWidth / 2 - 40,
          backgroundColor: "#E1E1E1",
        }}
      />
    </View>
  );
};

export default OrDivider;
