import { View, Text, Alert } from 'react-native'
import React from 'react'
import { firebase } from '../firebase'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../Navigator/StackNavigator';
import { useDispatch } from 'react-redux';
import { UserSlice } from '../Redux/User';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export async function LoginFunction(
    email: string,
    password: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    dispatch: Dispatch<AnyAction>,
    navigation: NativeStackNavigationProp<StackParams>) {
    //set activity indicatorc
    setLoading(true);
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        //login success : need to get user's information from firestore
        //get all the users
        const result = (await firebase.firestore().collection('Users').get()).docs
        //loop through the docs and find the user in the db and dispatch a action to set the user global state
        result.forEach(user => {
            if (user.data().email != undefined && user.data().email === email)
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
        });
        //navigate to homescreen
        navigation.navigate('BottomTabNav')
        console.log('The user has sucessfully logged in')
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

