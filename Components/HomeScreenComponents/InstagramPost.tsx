import { View, Text } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";

//a instagram has 3 parts : Post Header: contains user profile lic + name + optional location
// Then we have content: image/video
//Post Footer : Image of the first in the list of likes, followed by Texts, caption of the post, comments and time stamp

export interface InstagramPostProps {
  userAvatar?: string;
  username?: string;
  imageContent?: string;
  description?: string;
  arrayLength?: number;
  currentIndex?: number;
  comments?: string[];
  peopleThatLiked?: string[];
}

const InstagramPost = ({
  userAvatar,
  username,
  imageContent,
  description,
  arrayLength,
  currentIndex,
  comments,
  peopleThatLiked,
}: InstagramPostProps) => {
  return (
    <View
      style={{
        marginTop: 5,
        marginBottom:
          //@ts-ignore
          currentIndex === arrayLength - 1 && arrayLength != 1 ? 20 : 0,
      }}
    >
      {/* Post header */}
      <PostHeader userAvatar={userAvatar} username={username} />
      {/* Content */}
      <PostContent imageContent={imageContent} />
      {/* Post footer */}
      <PostFooter
        description={description}
        username={username}
        comments={comments}
        peopleThatLiked={peopleThatLiked}
      />
    </View>
  );
};

export default InstagramPost;
