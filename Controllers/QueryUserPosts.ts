import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { firebase } from '../firebase'
import { ProfilePicturePostsSlice } from '../Redux/ProfilePicturePostsSlice';


export async function QueryUserPosts(
    currentUserUsername: string,
    dispatch: Dispatch<AnyAction>) {
    try {
        //reset the array first
        dispatch(ProfilePicturePostsSlice.actions.resetInitialState())
        let numberOfPushes = 0;
        const result = (await firebase.firestore().collection('Posts').get()).docs
        //loop through the docs and find the posts in the db and dispatch a action to set the user posts global state
        result.forEach(post => {
            if (post.data().author === currentUserUsername) {
                const postData = post.data()
                //set redux global state
                dispatch(ProfilePicturePostsSlice.actions.pushImageIntoArray({
                    postID: post.id,
                    imageURL: postData.imageURL,
                    peopleThatLiked: postData.PeopleThatLiked,
                    date: postData.date,
                    description: postData.description,
                    timestamp: postData.timestamp,
                }))
                numberOfPushes = numberOfPushes + 1;
            }

        });
        if (numberOfPushes === 0)
            dispatch(ProfilePicturePostsSlice.actions.resetInitialState())

        console.log('Query finished, and it pushed ' + numberOfPushes + " to redux global state that hold the images array")
    } catch (error) {
        console.log(error)
    }

}