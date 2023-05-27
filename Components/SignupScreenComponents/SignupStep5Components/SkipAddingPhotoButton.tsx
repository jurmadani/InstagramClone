import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SettingUpModal from "./SettingUpModal";
import { firebase } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { UserSlice } from "../../../Redux/User";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../../Navigator/StackNavigator";

const SkipAddingPhotoButton = () => {
  const [modalLoading, setModalLoading] = useState(false);
  const dispatch = useDispatch();
  //get redux current information
  const currentUserInformation = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.currentUserInformation
  );
  //navigation hook
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const HandleOnPressForSkipButton = async () => {
    //set modal loading activity to true
    setModalLoading(true);
    try {
      // create a new user for auth
      await firebase
        .auth()
        .createUserWithEmailAndPassword(
          currentUserInformation.email,
          currentUserInformation.password
        );

      //getDownloadURL
      const urlRef = firebase.storage().ref().child("DefaultAvatar.png");

      const url = (await urlRef.getDownloadURL()).toString();

      // put the user information into firestore database
      await firebase
        .firestore()
        .collection("Users")
        .doc(currentUserInformation.username)
        .set({
          email: currentUserInformation.email,
          username: currentUserInformation.username,
          fullName: currentUserInformation.fullName,
          profilePictureURL: url,
          followers: [],
          following: [],
          posts: 0,
        });
      //set user global state
      dispatch(
        UserSlice.actions.setUser({
          email: currentUserInformation.email,
          fullName: currentUserInformation.fullName,
          profilePictureURL: url,
          username: currentUserInformation.username,
          followers: [],
          following: [],
          posts: 0,
        })
      );
      //navigate to homescreen
      navigation.navigate("BottomTabNav");
    } catch (error) {
      console.log(error);
    }
    setModalLoading(false);
    //navigate to homescreen and set the currentUesr global state to the new user
    //....
  };

  return (
    <TouchableOpacity
      style={{ alignSelf: "center", marginTop: 25 }}
      onPress={HandleOnPressForSkipButton}
    >
      <View>
        <Text style={{ color: "#3797EF", fontWeight: "bold", fontSize: 17 }}>
          Skip
        </Text>
        {modalLoading ? <SettingUpModal visible={true} /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default SkipAddingPhotoButton;
