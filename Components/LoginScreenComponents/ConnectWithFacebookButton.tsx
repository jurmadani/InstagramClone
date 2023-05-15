import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
//@ts-expect-error
import Entypo from "react-native-vector-icons/Entypo";

const FacebookIcon = () => <Entypo name="facebook" size={22} color="#118EE3" />;

const ConnectWithFacebookButton = () => {
  return (
    <TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FacebookIcon />
        <Text style={{ fontWeight: "bold", color: "#118EE3", marginLeft: 10 }}>
          Log in with Facebook
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ConnectWithFacebookButton;
