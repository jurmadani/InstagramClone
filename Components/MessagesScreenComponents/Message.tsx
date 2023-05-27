import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "@ui-kitten/components";
import Feather from "react-native-vector-icons/Feather";
import { windowWidth } from "../../Constants/Dimensions";

const Message = ({ item }: any) => {
  const CameraIcon = () => (
    <TouchableOpacity>
      <Feather name="camera" size={22} />
    </TouchableOpacity>
  );
  console.log(item);
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 12 }}>
      {/* The Avatar of the user */}
      <Avatar
        source={item.poza}
        style={{
          height: 56,
          width: 56,
          marginLeft: 12,
        }}
      />
      {/* Name + last message and timestamp */}
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        {/* Username */}
        <Text style={{ fontWeight: "500", fontSize: 15 }}>{item.nume}</Text>
        {/* Last message + timestamp WHEN MESSAGE IS LONGER THAN 28 CHARS IT WILL SLICE THE MESSAGE AND ADD ...*/}
        <Text style={{ opacity: 0.4, width:windowWidth-140 }}>{item.message} · 15m</Text>
      </View>
      <View style={{ marginLeft: 20 }}>
        <CameraIcon />
      </View>
    </View>
  );
};

export default Message;
