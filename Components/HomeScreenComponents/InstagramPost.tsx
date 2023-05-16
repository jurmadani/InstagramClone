import { View, Text } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";

//a instagram has 3 parts : Post Header: contains user profile lic + name + optional location
// Then we have content: image/video
//Post Footer : Image of the first in the list of likes, followed by Texts, caption of the post, comments and time stamp

const InstagramPost = () => {
  return (
    <View>
      {/* Post header */}
      <PostHeader />
      {/* Content */}
      <PostContent />
      {/* Post footer */}
      <PostFooter />
    </View>
  );
};

export default InstagramPost;
