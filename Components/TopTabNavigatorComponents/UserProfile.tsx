import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ImageCache from "../../Controllers/ImageCache";

const UserProfile = ({ item }: any) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 10,
          paddingBottom: 15,
          marginTop: 13,
        }}
      >
        {/* User avatar */}
        <ImageCache
          uri={item.item.profilePictureURL}
          height={50}
          width={50}
          borderRadius={99}
          imageType="Profile Picture from search filter"
        />
        <View style={{ paddingLeft: 10 }}>
          {/* Username */}
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            {item.item.username}
          </Text>
          {/* Full name */}
          <Text style={{ opacity: 0.4 }}>{item.item.fullName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserProfile;
