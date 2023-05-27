import { View, Text, Alert } from 'react-native'
import React from 'react'
import { firebase } from '../firebase'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../Navigator/StackNavigator';
import { useDispatch } from 'react-redux';
import { UserSlice } from '../Redux/User';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { QueryUserPosts } from './QueryUserPosts';
import { HomescreenPostsSlice } from '../Redux/HomescreenPosts';

interface UsernameAndProfilePictureArrayProps {
    username: string;
    profilePictureURL: string;
}

export async function LoginFunction(
    email: string,
    password: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    dispatch: Dispatch<AnyAction>,
    navigation: NativeStackNavigationProp<StackParams>) {
    //set activity indicatorc
    setLoading(true);
    try {

        let username: string;
        let followingArray: string[]
        let homescreenPostsPushed = 0;
        let userUsernameAndProfilePictureArray: UsernameAndProfilePictureArrayProps[] = []
        await firebase.auth().signInWithEmailAndPassword("test@yahoo.com", "test12");
        //login success : need to get user's information from firestore
        //get all the users
        const result = (await firebase.firestore().collection('Users').get()).docs
        //loop through the docs and find the user in the db and dispatch a action to set the user global state
        result.forEach(async user => {
            if (user.data().email != undefined && user.data().email === "test@yahoo.com") {
                dispatch(UserSlice.actions.setUser({
                    email: user.data().email,
                    fullName: user.data().fullName,
                    profilePictureURL: user.data().profilePictureURL,
                    username: user.data().username,
                    followers: user.data().followers,
                    following: user.data().following,
                    posts: user.data().posts,
                    description: user.data().description
                }))

                username = user.data().username
                followingArray = user.data().following;

                const queryAllUsersTask = (await firebase.firestore().collection('Users').get()).docs
                queryAllUsersTask.forEach(user => {
                    const userData = user.data();
                    userUsernameAndProfilePictureArray.push({
                        username: userData.username,
                        profilePictureURL: userData.profilePictureURL
                    })
                });
                const queryAllPostsTask = (await firebase.firestore().collection('Posts').get()).docs
                queryAllPostsTask.forEach(post => {
                    const postData = post.data();
                    if (followingArray.includes(postData.author)) {
                        userUsernameAndProfilePictureArray.forEach(user => {
                            if (user.username === postData.author) {
                                dispatch(HomescreenPostsSlice.actions.pushPostIntoArray({
                                    postID: post.id,
                                    imageURL: postData.imageURL,
                                    peopleThatLiked: postData.peopleThatLiked,
                                    comments: postData.comments,
                                    date: postData.date,
                                    description: postData.description,
                                    timestamp: postData.timestamp,
                                    author: postData.author,
                                    authorProfilePicture: user.profilePictureURL
                                }))
                                homescreenPostsPushed = homescreenPostsPushed + 1;
                            }
                        });
                    }
                });
                console.log(homescreenPostsPushed + " have been added to redux global state of home screen posts ")
                //set the user image profile arrays
                await QueryUserPosts(username, dispatch).then(() => {
                    console.log('The user has sucessfully logged in')
                    //navigate to homescreen
                    navigation.navigate('BottomTabNav');
                    return;
                })
            }
        });




        //try to login the user with credentials
    } catch (error) {
        //@ts-ignores
        console.log('Login failed:', error.code);
        // Handle specific error cases
        //@ts-ignore
        switch (error.code) {
            case 'auth/user-not-found':
                Alert.alert("User not found")
                // Handle user not found error
                break;
            case 'auth/wrong-password':
                Alert.alert('Wrong email or password.')
                // Handle wrong password error
                break;
            case 'auth/invalid-email':
                Alert.alert("Invalid email")
                break;
            // Add more cases to handle other error types
            default:
                console.log('Unknown error occurred');
                // Handle other errors
                break;
        }
    }
    //unset activity indicator
    setLoading(false)

}

