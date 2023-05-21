import { View, Text } from "react-native";
import React from "react";
//@ts-expect-error
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { windowHeight } from "../../Constants/Dimensions";
import { useSelector } from "react-redux";
import UserPostsGrid from "./UserPostsGrid";

const CameraIcon = () => <SimpleLineIcons name="camera" size={55} />;

const UserUploadedPictures = () => {
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );
  return (
    <View
      style={{
        height: user.posts === 0 ? windowHeight / 2 : "auto",
        justifyContent: "center",
      }}
    >
      {user.posts === 0 ? (
        <View style={{ alignItems: "center" }}>
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
      ) : (
        <UserPostsGrid />
      )}
    </View>
  );
};

export default UserUploadedPictures;
