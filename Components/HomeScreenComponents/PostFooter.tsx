import { View, TouchableOpacity, Image, Text } from "react-native";
import React, { useState } from "react";
import LikedBySection from "./LikedBySection";
import AuthorPostCaption from "./AuthorPostCaption";
import CommentsPostSection from "./CommentsPostSection";
import { InstagramPostProps } from "./InstagramPost";
//@ts-ignores
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CommentIcon = () => (
  <TouchableOpacity style={{ marginLeft: 15 }}>
    <MaterialCommunityIcons name="comment-outline" size={29} />
  </TouchableOpacity>
);

const SendPostIcon = () => (
  <TouchableOpacity style={{ marginLeft: 15 }}>
    <MaterialCommunityIcons name="send" size={29} />
  </TouchableOpacity>
);

const PostFooter = ({
  username,
  description,
  comments,
  peopleThatLiked,
}: InstagramPostProps) => {
  const [liked, setLiked] = useState(false);

  const LikeButton = () => (
    <TouchableOpacity
      onPress={() => setLiked((isLiked) => !isLiked)}
      style={{ marginLeft: 15 }}
    >
      <MaterialCommunityIcons
        name={liked ? "heart" : "heart-outline"}
        color={liked ? "red" : "black"}
        size={29}
      />
    </TouchableOpacity>
  );
  return (
    <View>
      {/* Buttons view */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        {/* Like button */}
        <LikeButton />
        {/* Comment button */}
        <CommentIcon />
        {/* Send button */}
        <SendPostIcon />
      </View>
      {/* Liked by section */}
      <LikedBySection peopleThatLiked={peopleThatLiked} />
      {/* Author's caption */}
      <AuthorPostCaption username={username} description={description} />
      {/* Comments */}
      <CommentsPostSection comments={comments} />
    </View>
  );
};

export default PostFooter;
