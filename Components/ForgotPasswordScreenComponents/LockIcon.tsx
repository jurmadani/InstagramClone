import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
//@ts-expect-error
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const LockIcon = () => {
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
      }}
    >
      {/* The lock icon */}
      <Image
        source={require("../../assets/Icons/lock.png")}
        style={{ height: 60, width: 60 }}
      />
    </View>
  );
};

export default LockIcon;
