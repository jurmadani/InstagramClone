import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "@ui-kitten/components";
import { windowWidth } from "../../Constants/Dimensions";

interface ButonProfilProps {
  placeholder: string;
}

const ProfileButton = ({ placeholder }: ButonProfilProps) => {
  return (
    <TouchableOpacity>
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
        <Text style={{ fontSize: 14, fontWeight: "600" }}>{placeholder}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileButton;
