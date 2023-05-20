import { View, Text, Image } from "react-native";
import React, { useState } from "react";
//@ts-ignore
import Feather from "react-native-vector-icons/Feather";
import { windowWidth } from "../../Constants/Dimensions";
import AddPhotoButton from "./SignupStep5Components/AddPhotoButton";
import SkipAddingPhotoButton from "./SignupStep5Components/SkipAddingPhotoButton";
import { Divider } from "react-native-paper";
import BackToLoginButton from "./SignupStep1Components/BackToLoginButton";
import ChangePhotoButton from "./SignupStep5Components/ChangePhotoButton";
import ShareProfilePicture from "./SignupStep5Components/ShareProfilePicture";
import NextButton from "./NextButton";

const CameraIcon = () => <Feather name="camera" size={55} />;

const SignupStep5 = () => {
  const [image, setImage] = useState("");
  return (
    <View>
      {/*  Add profile photo icon*/}
      <View
        style={{
          borderWidth: image === "" ? 2 : 0,
          alignItems: "center",
          marginTop: 30,
          height: 100,
          width: 100,
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 999,
        }}
      >
        {image === "" && <CameraIcon />}
        {image != "" && (
          <Image
            source={{ uri: image }}
            style={{ height: 101, width: 101, borderRadius: 999 }}
          />
        )}
      </View>
      {/* Header text */}

      <Text
        style={{
          textAlign: "center",
          marginTop: 15,
          fontSize: 25,
          fontWeight: "500",
        }}
      >
        {image === "" ? "Add profile photo" : "Profile photo added"}
      </Text>
      {/* If image is not set yet display some information */}
      {image === "" && (
        <View>
          {/* Description text */}
          <Text
            style={{
              opacity: 0.4,
              textAlign: "center",
              width: windowWidth - 70,
              alignSelf: "center",
              marginTop: 15,
            }}
          >
            Add a profile photo so that your friends know it's you.
          </Text>
          {/* Add a photo button */}
          <AddPhotoButton setImage={setImage} />
          {/* Skip button */}
          <SkipAddingPhotoButton />
        </View>
      )}
      {/* If image was picked, give the change to change it and share it as a post */}
      {image != "" && (
        <View>
          <ChangePhotoButton setImage={setImage} />
          <ShareProfilePicture />
          {/* Description text */}
          <Text
            style={{
              fontSize: 14,
              opacity: 0.4,
              alignSelf: "center",
              width: windowWidth - 50,
              textAlign: "left",
              marginTop: 10,
            }}
          >
            Make this photo your first post so that people can like and comment
            on it.
          </Text>
          {/* Finish the signup process */}
          <NextButton
            placeholder="Next"
            width={windowWidth - 70}
            actionType="FinishSignupWithUserChosenAvatar"
            actionPayload={{ image: image }}
          />
        </View>
      )}

      {/* Back to login */}
      <Divider
        style={{
          width: windowWidth,
          top: image === "" ? windowWidth / 1.15 : windowWidth / 1.2,
        }}
      />
      <BackToLoginButton
        top={image === "" ? windowWidth / 1.05 : windowWidth / 1.15}
      />
    </View>
  );
};

export default SignupStep5;
