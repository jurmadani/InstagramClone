import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { StackParams } from "../Navigator/StackNavigator";
import React from 'react'
import { firebase } from '../firebase'
import { Alert } from "react-native";
import { UserSlice } from "../Redux/User";
import { EditAccountSlice } from "../Redux/EditAccoutSlice";

interface EditAccountInputProps {
    newImageURI: string;
    newFullName: string;
    newDescription: string;
}
    
interface UserProps {
    description: string;
    email: string;
    followers: number;
    following: number;
    posts: number;
    profilePictureURL: string;
    username: string;
    fullName: string;
}

export async function EditAccountFunction(
    dispatch: Dispatch<AnyAction>,
    navigation: NativeStackNavigationProp<StackParams>,
    EditAccountInputsState: EditAccountInputProps,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    user: UserProps) {
    const { newDescription, newFullName, newImageURI } = EditAccountInputsState
    setLoading(true)
    try {

        //check if changes happened if not just go back
        if (newDescription === '' && newFullName === '' && newImageURI === '') {
            navigation.goBack()
            return;
        }


        //update firestore with new info 
        const result = (await firebase.firestore().collection('Users').get()).docs
        result.forEach(async fetchedObj => {
            let fetchedUsername = fetchedObj.data().username;
            if (fetchedUsername === user.username) {
                //Alert user before updating
                Alert.alert('Alert', 'Are you sure you want to update your information?', [
                    {
                        text: 'Yes',
                        onPress: async () => {
                            setLoading(true)
                            //update description
                            if (newDescription != '') {
                                await firebase.firestore().collection('Users').doc(fetchedUsername).update({
                                    description: newDescription,
                                }).then(() => console.log('Updated description in firestore'))
                                //set user global state
                                dispatch(
                                    UserSlice.actions.setUser({
                                        email: user.email,
                                        fullName: user.fullName,
                                        profilePictureURL: user.profilePictureURL,
                                        username: user.username,
                                        followers: user.followers,
                                        following: user.following,
                                        posts: user.posts,
                                        description: newDescription,
                                    })
                                );
                            }

                            //update full name
                            if (newFullName != '') {
                                await firebase.firestore().collection('Users').doc(fetchedUsername).update({
                                    fullName: newFullName,
                                }).then(() => console.log("Updated full name in firestore"))
                                //set user global state
                                dispatch(
                                    UserSlice.actions.setUser({
                                        email: user.email,
                                        fullName: newFullName,
                                        profilePictureURL: user.profilePictureURL,
                                        username: user.username,
                                        followers: user.followers,
                                        following: user.following,
                                        posts: user.posts,
                                        description: user?.description,
                                    })
                                );
                            }

                            if (newImageURI != '') {

                                //update image
                                const response = await fetch(newImageURI);
                                const blob = await response.blob();
                                //upload to storage
                                var uploadTask = firebase
                                    .storage()
                                    .ref()
                                    .child(user.username)
                                    .put(blob);

                                //upload the picture to firebase
                                await uploadTask;

                                //getDownloadURL
                                const urlRef = firebase
                                    .storage()
                                    .ref()
                                    .child(user.username);

                                const url = (await urlRef.getDownloadURL()).toString();

                                // put the user information into firestore database
                                await firebase
                                    .firestore()
                                    .collection("Users")
                                    .doc(user.username)
                                    .update({
                                        profilePictureURL: url,
                                    });
                                //set user global state
                                dispatch(
                                    UserSlice.actions.setUser({
                                        email: user.email,
                                        fullName: user.fullName,
                                        profilePictureURL: url,
                                        username: user.username,
                                        followers: user.followers,
                                        following: user.following,
                                        posts: user.posts,
                                        description: user?.description,


                                    })
                                );
                                console.log('Updated image uri in storage & firestore')

                            }
                            //reset input values
                            dispatch(EditAccountSlice.actions.setToInitialState());
                            //alert user for success
                            Alert.alert("Update successful!")
                            //go back to profile screen
                            navigation.goBack();

                        }

                    },
                    {
                        text: 'Cancel',

                    }
                ])

            }

        });


    } catch (error) {
        console.log(error)
    }
    setLoading(false)
}