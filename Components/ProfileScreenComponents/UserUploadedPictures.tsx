import { View, Text } from "react-native";
import React from "react";
//@ts-expect-error
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { windowHeight } from "../../Constants/Dimensions";

const CameraIcon = () => <SimpleLineIcons name="camera" size={55} />;

const UserUploadedPictures = () => {
  return (
    <View
      style={{
        height: windowHeight / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          borderWidth: 2,
          borderRadius: 999,
          height: 95,
          width: 95,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CameraIcon />
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 22, marginTop: 10 }}>
        There are no posts yet
      </Text>
    </View>
  );
};

export default UserUploadedPictures;
