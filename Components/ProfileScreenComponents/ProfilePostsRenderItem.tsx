import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
import ImageCache from "../../Controllers/ImageCache";

interface RenderItemProps {
  index: number;
  imageURL: string;
}

const ProfilePostsRenderItem = ({ index, imageURL }: RenderItemProps) => {
  //navigation hook
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("UserProfilePosts", {
          indexToScroll: index,
        });
      }}
    >
      <ImageCache
        uri={imageURL}
        height={windowWidth / 3.05}
        width={windowWidth / 3.05}
        margin={1}
        imageType="ProfilePost Image"
      />
    </TouchableOpacity>
  );
};

export default ProfilePostsRenderItem;
