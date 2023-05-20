import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { windowWidth } from "../../Constants/Dimensions";
import { Button } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import { SignupProcessSlice } from "../../Redux/SignupProcessSlice";
import { firebase } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
import SettingUpModal from "./SignupStep5Components/SettingUpModal";

interface NextButtonProps {
  placeholder: string;
  width?: number;
  actionType: string;
  actionPayload: {
    email?: string;
    fullName?: string;
    password?: string;
    username?: string;
    image?: string;
  };
}

const NextButton = ({
  placeholder,
  width,
  actionType,
  actionPayload,
}: NextButtonProps) => {
  const [loading, setLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  //navigation hook
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  //redux
  const dispatch = useDispatch();

  const currentScreen = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.currentScreen
  );
  const fullNameInputError = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.fullNameInputError
  );
  const passwordInputError = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.passwordInputError
  );

  const currentUserInformation = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.currentUserInformation
  );
  //handlebutton press async function
  const handleButtonPress = async () => {
    switch (actionType) {
      case "CheckIfEmailAvailable":
        setLoading(true);
        try {
          const response = await firebase
            .auth()
            //@ts-expect-error
            .fetchSignInMethodsForEmail(actionPayload.email);
          //If email is not used everything is ok!
          if (response.length === 0) {
            dispatch(
              SignupProcessSlice.actions.setEmailInputErrorStatus({
                errorCode: 0,
                errorMessage: "Email is available.",
              })
            );
            //update the information inside the redux state so we can use it later one
            dispatch(
              SignupProcessSlice.actions.setCurrentUserEmail(
                actionPayload.email
              )
            );
            //move to the next screen

            dispatch(
              SignupProcessSlice.actions.setCurrentScreen(currentScreen + 1)
            );
          }
          //If email is used, we dispatch a error status code + error message to display to the user
          else
            dispatch(
              SignupProcessSlice.actions.setEmailInputErrorStatus({
                errorCode: 2,
                errorMessage: "Email already used.",
              })
            );
          //If any error occurs during the process we dispatch  a error code + message
        } catch (error) {
          dispatch(
            SignupProcessSlice.actions.setEmailInputErrorStatus({
              errorCode: 1,
              errorMessage: "Email invalid.",
            })
          );
          console.log(error);
        }
        setLoading(false);
        break;

      case "NameAndPassword":
        //if both inputs are valid procede to the next screen
        if (
          passwordInputError.errorCode === 2 &&
          fullNameInputError.errorCode === 2
        ) {
          //set current user's full name information in redux
          dispatch(
            SignupProcessSlice.actions.setCurrentUserFullName(
              actionPayload.fullName
            )
          );
          // set current user's password in redux
          dispatch(
            SignupProcessSlice.actions.setCurrentUserPassword(
              actionPayload.password
            )
          );
          dispatch(
            SignupProcessSlice.actions.setCurrentScreen(currentScreen + 1)
          );
        }
        //if email input is empty, show the user an error
        if (actionPayload.fullName === "")
          dispatch(
            SignupProcessSlice.actions.setFullNameInputErrorStatus({
              errorCode: 1,
              errorMessage: "Provide your full name.",
            })
          );
        //if it's completed dismiss the error
        else
          dispatch(
            SignupProcessSlice.actions.setFullNameInputErrorStatus({
              errorCode: 2,
              errorMessage: "",
            })
          );
        // if the password input is empty or less then 6 chars, show the user an error
        //@ts-expect-error
        if (actionPayload.password.length < 6)
          dispatch(
            SignupProcessSlice.actions.setPasswordInputErrorStatus({
              errorCode: 1,
              errorMessage:
                "A password with at least 6 characters for your account is required.",
            })
          );
        else
          dispatch(
            SignupProcessSlice.actions.setPasswordInputErrorStatus({
              errorCode: 2,
              errorMessage: "",
            })
          );

        break;
      /*
      continue signup process from screen number 3 from the signup forms 
      if the user is happy with the random username 
      */
      case "ContinueSignupProcessWithRandomUsername":
        {
          /* Update redux global state information about the new user */
        }
        dispatch(
          SignupProcessSlice.actions.setCurrentUserUsername(
            actionPayload.username
          )
        );
        // Move to the next screen
        dispatch(SignupProcessSlice.actions.setCurrentScreen(5));
        break;

      //finish sign up when user is happy with the username that they picked
      case "ContinueSignupProcessWithCustomUsername":
        //check if the new username is empty, and display an error
        if (actionPayload.username === "") {
          dispatch(
            SignupProcessSlice.actions.setUsernameInputError({
              errorCode: 1,
              errorMessage: "You need to provide a username.",
            })
          );
          //else clear the error
        } else {
          dispatch(
            SignupProcessSlice.actions.setUsernameInputError({
              errorCode: -1,
              errorMessage: "",
            })
          );
          //start fetching the firestore database to check if username is available
          setLoading(true);
          try {
            const result = await firebase
              .firestore()
              .collection("Users")
              .doc(actionPayload.username)
              .get();

            //if result is undefined, it means that no result came back from quering the firestore database
            if (result.data() === undefined) {
              dispatch(
                SignupProcessSlice.actions.setUsernameInputError({
                  errorCode: 3,
                  errorMessage: "Username available",
                })
              );
              //set a timeout for loading activity
              setTimeout(() => {
                //update redux global state info about user
                dispatch(
                  SignupProcessSlice.actions.setCurrentUserUsername(
                    actionPayload.username
                  )
                );
                //go to next screen
                dispatch(SignupProcessSlice.actions.setCurrentScreen(5));
              }, 500);
            } else {
              dispatch(
                SignupProcessSlice.actions.setUsernameInputError({
                  errorCode: 2,
                  errorMessage: "Username used already.",
                })
              );
            }
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        }

        break;
      //finish sign up with a profile picture of they're choice
      case "FinishSignupWithUserChosenAvatar":
        setModalLoading(true);
        try {
          // create a new user for auth
          await firebase
            .auth()
            .createUserWithEmailAndPassword(
              currentUserInformation.email,
              currentUserInformation.password
            );
          //upload the picture to storage

          //@ts-ignore
          const response = await fetch(actionPayload.image);
          const blob = await response.blob();

          var uploadTask = firebase
            .storage()
            .ref()
            .child(currentUserInformation.username)
            .put(blob);

          //upload the picture to firebase
          await uploadTask;

          //getDownloadURL
          const urlRef = firebase
            .storage()
            .ref()
            .child(currentUserInformation.username);

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
        break;
      //finish sign up with the default profile picture
      case "FinishSignupWithUserChosenAvatar":
        break;
    }
  };

  return (
    <View style={{ alignSelf: "center" }}>
      <Button
        style={{
          backgroundColor: "#3797EF",
          borderWidth: 0,
          width: width ? width : windowWidth - 20,
          marginTop: 20,
        }}
        size="large"
        onPress={handleButtonPress}
      >
        {loading ? <ActivityIndicator color="white" /> : placeholder}
      </Button>
      {modalLoading ? <SettingUpModal visible={modalLoading} /> : null}
    </View>
  );
};

export default NextButton;
