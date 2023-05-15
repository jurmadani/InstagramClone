import { View, Text, Dimensions, Image, useColorScheme } from "react-native";
import React from "react";

const LockIcon = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";

  return (
    //A circle view
    <View
      style={{
        borderRadius:
          Math.round(
            Dimensions.get("window").width + Dimensions.get("window").height
          ) / 2,
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: isDarkTheme ? "white" : "black",
      }}
    >
      {/* The lock icon */}
      <Image
        source={require("../../assets/Icons/lock.png")}
        style={{
          height: 60,
          width: 60,
          tintColor: isDarkTheme ? "white" : "black",
        }}
      />
    </View>
  );
};

export default LockIcon;
