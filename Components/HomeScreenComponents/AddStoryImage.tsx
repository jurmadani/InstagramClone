import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { Avatar } from "@ui-kitten/components";

const AddStoryImage = () => {
  return (
    <TouchableOpacity style={{ margin: Platform.OS === "android" ? 5 : 0 }}>
      <View
        style={{
          marginLeft: 15,
        }}
      >
        {/* Imaginea user-ului conectat */}
        <Avatar
          style={{
            height: 68,
            width: 68,
            marginTop: 5,
          }}
          source={require("../../assets/Images/dummy-picture.jpg")}
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
