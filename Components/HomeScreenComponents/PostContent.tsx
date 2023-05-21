import { View, Image } from "react-native";
import React from "react";
import { InstagramPostProps } from "./InstagramPost";

const PostContent = ({ imageContent }: InstagramPostProps) => {
  return (
    <View>
      <Image
        source={{ uri: imageContent }}
        style={{ height: 375, width: 375 }}
      />
    </View>
  );
};

export default PostContent;
