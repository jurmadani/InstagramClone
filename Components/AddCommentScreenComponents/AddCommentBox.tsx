import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Avatar } from "@ui-kitten/components";
import { Input } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import ImageCache from "../../Controllers/ImageCache";
import { AddCommentToPost } from "../../Controllers/AddCommentToPost";
import { CommentsArrayMutableProps } from "../../Screens/AddCommentScreen";

interface ActionPayloadProps {
  username: string;
  comment: string;
  profilePictureURL: string;
  timestamp: string;
  date: string;
}

interface AddCommentBoxProps {
  postID: string;
  commentsArray: ActionPayloadProps[];
  setMutableArray: React.Dispatch<
    React.SetStateAction<CommentsArrayMutableProps[]>
  >;
  setCommentsArrayState: React.Dispatch<
    React.SetStateAction<CommentsArrayMutableProps[]>
  >;
}

const AddCommentBox = ({
  postID,
  commentsArray,
  setMutableArray,
  setCommentsArrayState,
}: AddCommentBoxProps) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const PostCommentButton = () => (
    <TouchableOpacity
      onPress={async () => {
        //get now date
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        await AddCommentToPost(
          postID,
          {
            username: user.username,
            comment: comment,
            profilePictureURL: user.profilePictureURL,
            timestamp: hours + ":" + min + ":" + sec,
            date: date + "/" + month + "/" + year,
          },
          dispatch,
          commentsArray
        );
        const shadowArray = [
          ...commentsArray,
          {
            username: user.username,
            comment: comment,
            profilePictureURL: user.profilePictureURL,
            timestamp: hours + ":" + min + ":" + sec,
            date: date + "/" + month + "/" + year,
          },
        ];
        //update comments array state
        setMutableArray(shadowArray);
        if (setCommentsArrayState != undefined)
          setCommentsArrayState(shadowArray);
        console.log(shadowArray);
        //reset value from input
        setComment("");
      }}
    >
      <Text style={styles.sendButton}>Send</Text>
    </TouchableOpacity>
  );

  const user = useSelector(
    (state) =>
      //@ts-ignore
      state.User.user
  );

  return (
    <View style={styles.container}>
      {/* User avatar */}
      <ImageCache
        uri={user.profilePictureURL}
        height={40}
        width={40}
        borderRadius={99}
        imageType="User profile picture from comment box "
      />
      {/* Comment input */}
      <Input
        placeholder="Add a comment..."
        style={styles.input}
        accessoryRight={PostCommentButton}
        value={comment}
        onChangeText={(text) => setComment(text)}
      />
      {/* Send button */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 30,
    alignItems: "center",
  },
  userAvatar: {},
  input: {
    flex: 1,
    borderRadius: 99,
    borderColor: "#CACACA",
    backgroundColor: "white",
    marginLeft: 10,
  },
  sendButton: {
    color: "#3797EF",
    fontWeight: "700",
    fontSize: 16,
    marginRight: 5,
  },
});

export default AddCommentBox;
