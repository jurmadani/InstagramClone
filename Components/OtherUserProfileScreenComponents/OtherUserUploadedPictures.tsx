import { View, Text } from "react-native";
import React from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { windowHeight } from "../../Constants/Dimensions";
import { useSelector } from "react-redux";
import OtherUserPostsGrid from "./OtherUserPostsGrid";

const CameraIcon = () => <SimpleLineIcons name="camera" size={55} />;

type Post = {
  author: string;
  comments: string[];
  date: string;
  description: string;
  imageURL: string;
  peopleThatLiked: string[];
  timestamp: string;
};

interface OtherUserUploadedPicturesProps {
  otherUserPosts: Post[];
}

const OtherUserUploadedPictures = ({
  otherUserPosts,
}: OtherUserUploadedPicturesProps) => {
  const otherUser = useSelector(
    //@ts-expect-error
    (state) => state.OtherUser.otherUser
  );
  return (
    <View
      style={{
        height: otherUser.posts === 0 ? windowHeight / 2 : "auto",
        justifyContent: "center",
      }}
    >
      {otherUser.posts === 0 ? (
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              borderWidth: 2,
              borderRadius: 999,
              height: 95,
              width: 95,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CameraIcon />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 22, marginTop: 10 }}>
            There are no posts yet
          </Text>
        </View>
      ) : (
        <OtherUserPostsGrid otherUserPostsArray={otherUserPosts} />
      )}
    </View>
  );
};

export default OtherUserUploadedPictures;
