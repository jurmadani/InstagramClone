import { View, Text, Image } from "react-native";
import React from "react";
import { Avatar } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import ImageCache from "../../Controllers/ImageCache";

const OtherUserProfilePicture = () => {
  const otherUser = useSelector(
    //@ts-ignore
    (state) => state.OtherUser.otherUser
  );

  return (
    <View style={{ margin: 20 }}>
      <ImageCache
        uri={otherUser.profilePictureURL}
        height={90}
        width={90}
        borderRadius={999}
        imageType="User profile picture"
      />
      <View
        style={{
          position: "absolute",
          backgroundColor: "white",
          borderRadius: 100,
          height: 26.5,
          width: 26.5,
          left: 62,
          top: 62,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Plusul de pe imagine */}
        <Image
          source={require("../../assets//Icons/plus-icon.png")}
          style={{
            height: 25,
            width: 25,
          }}
        />
      </View>
    </View>
  );
};

export default OtherUserProfilePicture;
