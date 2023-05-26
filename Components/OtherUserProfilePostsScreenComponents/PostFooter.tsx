import { View, TouchableOpacity, Image, Text } from "react-native";
import React, { useState, useEffect } from "react";
//@ts-ignores
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { firebase } from "../../firebase";
import { useDispatch } from "react-redux";
import { ProfilePicturePostsSlice } from "../../Redux/ProfilePicturePostsSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
import { InstagramPostProps } from "../HomeScreenComponents/InstagramPost";
import LikedBySection from "./LikedBySection";
import AuthorPostCaption from "./AuthorPostCaption";
import CommentsPostSection from "./CommentsPostSection";
import { OtherUserInstagramPostProps } from "./OtherUserInstagramPost";
import { CommentsArrayMutableProps } from "../../Screens/AddCommentScreen";

//component interface
export interface ExtendedInstagramPostProps
  extends OtherUserInstagramPostProps {
  liked?: boolean;
  setLiked?: React.Dispatch<React.SetStateAction<boolean>>;
  setCommentsArrayState: React.Dispatch<
    React.SetStateAction<CommentsArrayMutableProps[]>
  >;
}

const SendPostIcon = () => (
  <TouchableOpacity style={{ marginLeft: 15 }}>
    <MaterialCommunityIcons name="send" size={29} />
  </TouchableOpacity>
);

export const LikePostFunction = async (
  username: string,
  postID: string,
  peopleThatLiked: string[]
) => {
  await firebase.firestore().collection("Posts").doc(postID).update({
    peopleThatLiked: peopleThatLiked,
  });
};

export const UnlikePostFunction = async (
  username: string,
  postID: string,
  peopleThatLiked: string[]
) => {
  await firebase.firestore().collection("Posts").doc(postID).update({
    peopleThatLiked: peopleThatLiked,
  });
};

const PostFooter = ({
  usernameOfUserThatPosted,
  description,
  comments,
  peopleThatLiked,
  postID,
  liked,
  setLiked,
  timestamp,
  date,
  usernameOfCurrentUserLoggedIn,
  setCommentsArrayState,
}: ExtendedInstagramPostProps) => {
  //navigation hook
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const CommentIcon = () => (
    <TouchableOpacity
      style={{ marginLeft: 15 }}
      onPress={() =>
        navigation.navigate("AddComment", {
          commentsArray: comments,
          postOwner: usernameOfUserThatPosted,
          description: description,
          timestamp: timestamp,
          date: date,
          postID: postID,
          setCommentsArrayState: setCommentsArrayState,
        })
      }
    >
      <MaterialCommunityIcons name="comment-outline" size={29} />
    </TouchableOpacity>
  );

  const dispatch = useDispatch();
  const LikeButton = () => (
    <TouchableOpacity
      onPress={async () => {
        if (
          usernameOfCurrentUserLoggedIn != undefined &&
          postID != undefined &&
          peopleThatLiked != undefined &&
          setLiked != undefined
        ) {
          if (liked === false) {
            //like functionality
            const tempArray = [...peopleThatLiked]; // Make a copy of the array

            tempArray.push(usernameOfCurrentUserLoggedIn); // Modify the copied array
            // push your name into the peopleThatLiked array
            // update firestore
            await LikePostFunction(
              usernameOfCurrentUserLoggedIn,
              postID,
              tempArray
            );
            setLiked(true);
          } else {
            //unlike functionality
            const tempArray = [...peopleThatLiked]; // Make a copy of the array

            const userIndex = tempArray.indexOf(usernameOfCurrentUserLoggedIn);

            //delete the user that unliked the photo from the people that like array
            tempArray.splice(userIndex, 1);

            // update firestore
            await UnlikePostFunction(
              usernameOfCurrentUserLoggedIn,
              postID,
              tempArray
            );
            //update redux
            dispatch(
              ProfilePicturePostsSlice.actions.removePeopleThatLiked({
                postID: postID,
                peopleThatLiked: tempArray,
              })
            );

            setLiked(false);
          }
        }
      }}
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
      <AuthorPostCaption
        username={usernameOfUserThatPosted}
        description={description}
      />
      {/* Comments */}
      <CommentsPostSection
        usernameOfUserThatPosted={usernameOfUserThatPosted}
        description={description}
        postID={postID}
        setCommentsArrayState={setCommentsArrayState}
        comments={comments}
        timestamp={timestamp}
        date={date}
      />
    </View>
  );
};

export default PostFooter;
