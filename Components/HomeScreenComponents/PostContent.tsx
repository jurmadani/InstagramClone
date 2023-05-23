import { View, Image } from "react-native";
import React from "react";
import { InstagramPostProps } from "./InstagramPost";
import ImageCache from "../../Controllers/ImageCache";

const PostContent = ({ imageContent }: InstagramPostProps) => {
  return (
    <View>
      <ImageCache
        //@ts-ignore
        uri={imageContent}
        height={375}
        width={375}
        imageType="Images from UserProfilePosts screen"
      />
    </View>
  );
};

export default PostContent;
