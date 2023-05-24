import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
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
  postID?: string;
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
  postID,
}: InstagramPostProps) => {
  const [liked, setLiked] = useState(false);

  //component mounts
  useEffect(() => {
    if (peopleThatLiked != undefined)
      peopleThatLiked.forEach((otherUser) => {
        if (otherUser === username) setLiked(true);
      });
  }, []);

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
      <PostContent
        imageContent={imageContent}
        postID={postID}
        peopleThatLiked={peopleThatLiked}
        username={username}
        liked={liked}
        setLiked={setLiked}
      />
      {/* Post footer */}
      <PostFooter
        description={description}
        username={username}
        comments={comments}
        peopleThatLiked={peopleThatLiked}
        postID={postID}
        liked={liked}
        setLiked={setLiked}
      />
    </View>
  );
};

export default InstagramPost;
