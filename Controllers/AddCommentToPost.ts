/*
{
    actionPayload:{
        username: string;
        comment: string;
        profilePictureURL: string;
        timestamp: string;
        date: string;
    },
    postID:string;
}
 
*/

import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { firebase } from "../firebase"
import { ProfilePicturePostsSlice } from "../Redux/ProfilePicturePostsSlice";

interface ActionPayloadProps {
    username: string;
    comment: string;
    profilePictureURL: string;
    timestamp: string;
    date: string;
}

export async function AddCommentToPost(
    postID: string,
    actionPayload: ActionPayloadProps,
    dispatch: Dispatch<AnyAction>,
    commentsArray: ActionPayloadProps[]) {

    try {
        const newCommentsArray = [...commentsArray]; // Make a copy of the array
        //push the new comment object
        newCommentsArray.push(actionPayload)
        //update firestore
        await firebase.firestore().collection('Posts').doc(postID).update({
            comments: newCommentsArray
        })
        console.log("Comment added")

    } catch (error) {
        console.log(error)
    }


}