import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SettingUpModal from "./SettingUpModal";
import { firebase } from "../../../firebase";
import { useSelector } from "react-redux";

const SkipAddingPhotoButton = () => {
  const [modalLoading, setModalLoading] = useState(false);
  //get redux current information
  const currentUserInformation = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.currentUserInformation
  );

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
        });
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
