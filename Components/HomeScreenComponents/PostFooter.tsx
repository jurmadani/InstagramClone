import { View, TouchableOpacity, Image, Text } from "react-native";
import React, { useState, useEffect } from "react";
import LikedBySection from "./LikedBySection";
import AuthorPostCaption from "./AuthorPostCaption";
import CommentsPostSection from "./CommentsPostSection";
import { InstagramPostProps } from "./InstagramPost";
//@ts-ignores
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { firebase } from "../../firebase";
import { useDispatch } from "react-redux";
import { ProfilePicturePostsSlice } from "../../Redux/ProfilePicturePostsSlice";

//component interface
interface ExtendedInstagramPostProps extends InstagramPostProps {
  liked: boolean;
  setLiked: React.Dispatch<React.SetStateAction<boolean>>;
}

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
  username,
  description,
  comments,
  peopleThatLiked,
  postID,
  liked,
  setLiked,
}: ExtendedInstagramPostProps) => {
  const dispatch = useDispatch();

  const LikeButton = () => (
    <TouchableOpacity
      onPress={async () => {
        if (
          username != undefined &&
          postID != undefined &&
          peopleThatLiked != undefined
        ) {
          if (liked === false) {
            //like functionality
            const tempArray = [...peopleThatLiked]; // Make a copy of the array

            tempArray.push(username); // Modify the copied array
            // push your name into the peopleThatLiked array
            // update firestore
            await LikePostFunction(username, postID, tempArray);
            //update redux
            dispatch(
              ProfilePicturePostsSlice.actions.addNewPeopleThatLiked({
                postID: postID,
                peopleThatLiked: tempArray,
              })
            );
            setLiked(true);
          } else {
            //unlike functionality
            const tempArray = [...peopleThatLiked]; // Make a copy of the array

            const userIndex = tempArray.indexOf(username);

            //delete the user that unliked the photo from the people that like array
            tempArray.splice(userIndex, 1);

            // update firestore
            await UnlikePostFunction(username, postID, tempArray);
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
      <AuthorPostCaption username={username} description={description} />
      {/* Comments */}
      <CommentsPostSection comments={comments} />
    </View>
  );
};

export default PostFooter;
