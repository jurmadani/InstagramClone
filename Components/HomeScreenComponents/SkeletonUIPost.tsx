import { View, Text } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/base";

const PostHeaderSkeleton = () => {
  return (
    <View style={{ flexDirection: "row", margin: 13, alignItems: "center" }}>
      {/* User's profile picture who posted   */}
      <Skeleton
        height={35}
        width={35}
        animation="pulse"
        circle
        style={{ marginRight: 20 }}
      />
      <Skeleton width={100} animation="pulse" />
    </View>
  );
};

const PostContentSkeleton = () => {
  return (
    <View>
      <Skeleton height={375} width={375} animation="pulse" />
    </View>
  );
};

const SkeletonUIPost = () => {
  return (
    <View
      style={{
        marginTop: 5,
      }}
    >
      {/* Post header */}
      <PostHeaderSkeleton />
      {/* Content */}
      <PostContentSkeleton />
    </View>
  );
};

export default SkeletonUIPost;
