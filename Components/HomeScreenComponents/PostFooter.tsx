import { View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import { Avatar } from "@ui-kitten/components";
import LikedBySection from "./LikedBySection";
import AuthorPostCaption from "./AuthorPostCaption";
import CommentsPostSection from "./CommentsPostSection";
import { InstagramPostProps } from "./InstagramPost";

const LikeIcon = () => (
  <TouchableOpacity>
    <Image
      source={require("../../assets/Icons/like.png")}
      style={{ height: 29, width: 29, marginLeft: 15 }}
    />
  </TouchableOpacity>
);

const CommentIcon = () => (
  <TouchableOpacity>
    <Image
      source={require("../../assets/Icons/comment.png")}
      style={{ height: 29, width: 29, marginLeft: 15 }}
    />
  </TouchableOpacity>
);

const SendPostIcon = () => (
  <TouchableOpacity>
    <Image
      source={require("../../assets/Icons/send.png")}
      style={{ height: 29, width: 29, marginLeft: 15 }}
    />
  </TouchableOpacity>
);

const PostFooter = ({ username, description }: InstagramPostProps) => {
  return (
    <View>
      {/* Buttons view */}
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        {/* Like button */}
        <LikeIcon />
        {/* Comment button */}
        <CommentIcon />
        {/* Send button */}
        <SendPostIcon />
      </View>
      {/* Liked by section */}
      <LikedBySection />
      {/* Author's caption */}
      <AuthorPostCaption username={username} description={description} />
      {/* Comments */}
      <CommentsPostSection />
    </View>
  );
};

export default PostFooter;
