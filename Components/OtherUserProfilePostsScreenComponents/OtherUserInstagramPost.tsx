import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import { CommentsArrayMutableProps } from "../../Screens/AddCommentScreen";

export interface OtherUserInstagramPostProps {
  userAvatar?: string;
  usernameOfUserThatPosted?: string;
  usernameOfCurrentUserLoggedIn?: string;
  imageContent?: string;
  description?: string;
  arrayLength?: number;
  currentIndex?: number;
  comments?: CommentsArrayMutableProps[];
  peopleThatLiked?: string[];
  postID?: string;
  timestamp?: string;
  date?: string;
}

const OtherUserInstagramPost = ({
  userAvatar,
  usernameOfUserThatPosted,
  usernameOfCurrentUserLoggedIn,
  imageContent,
  description,
  arrayLength,
  currentIndex,
  comments,
  peopleThatLiked,
  postID,
  date,
  timestamp,
}: OtherUserInstagramPostProps) => {
  const [liked, setLiked] = useState(false);
  const [peopleThatLikedArrayState, setPeopleThatLikedArrayState] = useState<
    string[]
  >([]);
  const [commentsArrayState, setCommentsArrayState] = useState<
    CommentsArrayMutableProps[]
  >([]);

  //component mounts
  useEffect(() => {
    if (peopleThatLiked != undefined && comments != undefined) {
      peopleThatLiked.forEach((otherUser) => {
        if (otherUser === usernameOfCurrentUserLoggedIn) setLiked(true);
      });
      setPeopleThatLikedArrayState(peopleThatLiked);
      setCommentsArrayState(comments);
    }
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
      <PostHeader userAvatar={userAvatar} username={usernameOfUserThatPosted} />
      {/* Content */}
      <PostContent
        imageContent={imageContent}
        postID={postID}
        peopleThatLiked={peopleThatLikedArrayState}
        setPeopleThatLiked={setPeopleThatLikedArrayState}
        username={usernameOfCurrentUserLoggedIn}
        liked={liked}
        setLiked={setLiked}
      />
      {/* Post footer */}
      <PostFooter
        description={description}
        usernameOfUserThatPosted={usernameOfUserThatPosted}
        usernameOfCurrentUserLoggedIn={usernameOfCurrentUserLoggedIn}
        comments={commentsArrayState}
        setCommentsArrayState={setCommentsArrayState}
        peopleThatLiked={peopleThatLikedArrayState}
        postID={postID}
        liked={liked}
        setLiked={setLiked}
        date={date}
        timestamp={timestamp}
        setPeopleThatLiked={setPeopleThatLikedArrayState}
        imageContent={imageContent}
      />
    </View>
  );
};

export default OtherUserInstagramPost;
