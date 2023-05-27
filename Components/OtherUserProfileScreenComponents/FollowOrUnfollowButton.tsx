import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "@ui-kitten/components";
import { windowWidth } from "../../Constants/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
import { useDispatch, useSelector } from "react-redux";
import { firebase } from "../../firebase";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { UserSlice } from "../../Redux/User";
import { OtherUserSlice } from "../../Redux/OtherUser";

const onPressHandler = async (
  doesCurrentUserLoggedinFollowOtherUser: boolean,
  setCurrentUserLoggedinFollowOtherUser: React.Dispatch<
    React.SetStateAction<boolean>
  >,
  currentUserLoggedIn: any,
  otherUser: any,
  dispatch: Dispatch<AnyAction>
) => {
  if (!doesCurrentUserLoggedinFollowOtherUser) {
    //update firestore and update redux global state
    //update current user logged in following array
    const followingTempArray = [...currentUserLoggedIn.following]; // Make a copy of the array
    followingTempArray.push(otherUser.username);

    await firebase
      .firestore()
      .collection("Users")
      .doc(currentUserLoggedIn.username)
      .update({
        following: followingTempArray,
      })
      .then(() => {
        //update redux global state
        dispatch(
          UserSlice.actions.setUser({
            description: currentUserLoggedIn.description,
            email: currentUserLoggedIn.email,
            followers: currentUserLoggedIn.followers,
            following: followingTempArray,
            fullName: currentUserLoggedIn.fullName,
            posts: currentUserLoggedIn.posts,
            profilePictureURL: currentUserLoggedIn.profilePictureURL,
            username: currentUserLoggedIn.username,
          })
        );
        console.log(
          "Dispatched setUser action & Updated current user logged-in following array"
        );
      });

    //update other user  followers array
    const followersTempArray = [...otherUser.followers]; // Make a copy of the array
    followersTempArray.push(currentUserLoggedIn.username);

    await firebase
      .firestore()
      .collection("Users")
      .doc(otherUser.username)
      .update({
        followers: followersTempArray,
      })
      .then(() => {
        //update redux global state
        dispatch(
          OtherUserSlice.actions.setOtherUser({
            description: otherUser.description,
            email: otherUser.email,
            followers: followersTempArray,
            following: otherUser.following,
            fullName: otherUser.fullName,
            posts: otherUser.posts,
            profilePictureURL: otherUser.profilePictureURL,
            username: otherUser.username,
          })
        );
        console.log("Updated other user followers array");
      });

    //get now date
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    //add notification doc into firestore
    await firebase
      .firestore()
      .collection("Notifications")
      .add({
        receiver: otherUser.username,
        sender: currentUserLoggedIn.username,
        notificationType: "Follow",
        senderProfilePictureURL: currentUserLoggedIn.profilePictureURL,
        pictureThatSenderLiked: null,
        date: date + "/" + month + "/" + year,
        timestamp: hours + ":" + min + ":" + sec,
      })
      .then(() => console.log("Notification follow doc added to firestore"));

    //setCurrentUserLoggedinFollowOtherUser
    console.log(
      "Follow functionality for " +
        otherUser.username +
        " executed with success!"
    );
    setCurrentUserLoggedinFollowOtherUser(true);
  } else {
    //update firestore and update redux global state
    //update current user logged in following array
    const followingTempArray = [...currentUserLoggedIn.following]; // Make a copy of the array

    const userIndexFollowing = followingTempArray.indexOf(otherUser.username);

    //delete the user that unliked the photo from the people that like array
    followingTempArray.splice(userIndexFollowing, 1);

    await firebase
      .firestore()
      .collection("Users")
      .doc(currentUserLoggedIn.username)
      .update({
        following: followingTempArray,
      })
      .then(() => {
        //update redux global state
        dispatch(
          UserSlice.actions.setUser({
            description: currentUserLoggedIn.description,
            email: currentUserLoggedIn.email,
            followers: currentUserLoggedIn.followers,
            following: followingTempArray,
            fullName: currentUserLoggedIn.fullName,
            posts: currentUserLoggedIn.posts,
            profilePictureURL: currentUserLoggedIn.profilePictureURL,
            username: currentUserLoggedIn.username,
          })
        );
        console.log(
          "Dispatched setUser action & Updated current user logged-in following array"
        );
      });

    //update other user  followers array
    const followersTempArray = [...otherUser.followers]; // Make a copy of the array

    const userIndexFollowers = followersTempArray.indexOf(
      currentUserLoggedIn.username
    );

    //delete the user that unliked the photo from the people that like array
    followersTempArray.splice(userIndexFollowers, 1);

    await firebase
      .firestore()
      .collection("Users")
      .doc(otherUser.username)
      .update({
        followers: followersTempArray,
      })
      .then(() => {
        //update redux global state
        dispatch(
          OtherUserSlice.actions.setOtherUser({
            description: otherUser.description,
            email: otherUser.email,
            followers: followersTempArray,
            following: otherUser.following,
            fullName: otherUser.fullName,
            posts: otherUser.posts,
            profilePictureURL: otherUser.profilePictureURL,
            username: otherUser.username,
          })
        );
        console.log("Updated other user followers array");
      });

    //setCurrentUserLoggedinFollowOtherUser
    console.log(
      "Unfollow functionality for " +
        otherUser.username +
        " executed with success!"
    );
    setCurrentUserLoggedinFollowOtherUser(false);
  }
};

const FollowOrUnfollowButton = () => {
  const [
    doesCurrentUserLoggedinFollowOtherUser,
    setCurrentUserLoggedinFollowOtherUser,
  ] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const currentUserLoggedIn = useSelector(
    (state) =>
      //@ts-ignore
      state.User.user
  );
  const otherUser = useSelector(
    (state) =>
      //@ts-ignore
      state.OtherUser.otherUser
  );

  useEffect(() => {
    setCurrentUserLoggedinFollowOtherUser(
      otherUser?.followers.includes(currentUserLoggedIn.username)
    );
  }, []);

  return (
    <TouchableOpacity
      onPress={async () =>
        onPressHandler(
          doesCurrentUserLoggedinFollowOtherUser,
          setCurrentUserLoggedinFollowOtherUser,
          currentUserLoggedIn,
          otherUser,
          dispatch
        )
      }
    >
      <View
        style={{
          backgroundColor: doesCurrentUserLoggedinFollowOtherUser
            ? "#E1E1E1"
            : "#3797EF",
          height: 33,
          width: windowWidth / 2 - 20,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          marginHorizontal: 5,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: doesCurrentUserLoggedinFollowOtherUser ? "black" : "white",
          }}
        >
          {doesCurrentUserLoggedinFollowOtherUser ? "Unfollow" : "Follow"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FollowOrUnfollowButton;
