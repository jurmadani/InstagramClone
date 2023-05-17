import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "@ui-kitten/components";
//@ts-expect-error
import Feather from "react-native-vector-icons/Feather";

const Message = () => {
  const CameraIcon = () => (
    <TouchableOpacity>
      <Feather name="camera" size={22} />
    </TouchableOpacity>
  );

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 12 }}>
      {/* The Avatar of the user */}
      <Avatar
        source={require("../../assets/Images/dummy-picture-3.png")}
        style={{
          height: 56,
          width: 56,
          marginLeft: 12,
        }}
      />
      {/* Name + last message and timestamp */}
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        {/* Username */}
        <Text style={{ fontWeight: "500", fontSize: 15 }}>d.jurma</Text>
        {/* Last message + timestamp WHEN MESSAGE IS LONGER THAN 28 CHARS IT WILL SLICE THE MESSAGE AND ADD ...*/}
        <Text style={{ opacity: 0.4 }}>See you on the next meeting! · 15m</Text>
      </View>
      <View style={{ marginLeft: 20 }}>
        <CameraIcon />
      </View>
    </View>
  );
};

export default Message;
