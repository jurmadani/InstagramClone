import { View, Text, Dimensions } from "react-native";
import React from "react";
//@ts-expect-error
import AntDesign from "react-native-vector-icons/AntDesign";

const Icon = () => <AntDesign name="user" size={90} />;

const UserIcon = () => {
  return (
    <View
      style={{
        borderRadius:
          Math.round(
            Dimensions.get("window").width + Dimensions.get("window").height
          ) / 2,
        width: 140,
        height: 140,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        alignSelf: "center",
        marginTop: 50,
      }}
    >
      <Icon />
    </View>
  );
};

export default UserIcon;
