import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "@ui-kitten/components";
import { windowWidth } from "../../Constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";

interface ButonProfilProps {
  placeholder: string;
  actionType: string;
}

const onPressHandler = (
  actionType: string,
  navigation: NativeStackNavigationProp<StackParams>
) => {
  switch (actionType) {
    case "EditAccount":
      navigation.navigate("EditAccount");
      break;
    case "ShareAccount":
      console.log("share");
      break;
  }
};

const ProfileButton = ({ placeholder, actionType }: ButonProfilProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <TouchableOpacity onPress={() => onPressHandler(actionType, navigation)}>
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
