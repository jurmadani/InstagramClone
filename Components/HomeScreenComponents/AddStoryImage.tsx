import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { Avatar } from "@ui-kitten/components";
import { useSelector } from "react-redux";
import ImageCache from "../../Controllers/ImageCache";

const AddStoryImage = () => {
  //get the user global state
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );
  return (
    <TouchableOpacity style={{ margin: Platform.OS === "android" ? 5 : 0 }}>
      <View
        style={{
          marginLeft: 15,
        }}
      >
        {/* Imaginea user-ului conectat */}
        <ImageCache
          uri={user.profilePictureURL}
          height={68}
          width={68}
          marginTop={5}
          borderRadius={999}
          imageType="User profile picture"
        />
        <View
          style={{
            position: "absolute",
            backgroundColor: "white",
            borderRadius: 100,
            height: 30,
            width: 30,
            left: 45,
            top: 45,
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
        <Text
          style={{
            textAlign: "center",
            fontSize: 11,
            marginTop: 5,
          }}
        >
          Your story
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddStoryImage;
