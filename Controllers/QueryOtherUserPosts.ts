import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { firebase } from '../firebase'
import { ProfilePicturePostsSlice } from '../Redux/ProfilePicturePostsSlice';

interface OtherUserPostsInterface {
    postID: string;
    author: string;
    comments: string[];
    date: string;
    description: string;
    imageURL: string;
    peopleThatLiked: string[];
    timestamp: string;
}

export async function QueryOtherUserPosts(
    currentUserUsername: string,
    setOtherUserPosts: React.Dispatch<React.SetStateAction<OtherUserPostsInterface[]>>
) {
    let shadowArray: OtherUserPostsInterface[] = []
    try {
        let numberOfPushes = 0;
        const result = (await firebase.firestore().collection('Posts').get()).docs
        //loop through the docs and find the posts in the db and dispatch a action to set the user posts global state
        result.forEach(async post => {
            if (post.data().author === currentUserUsername) {
                const postData = post.data()
                //@ts-ignore
                shadowArray.push(postData)
                numberOfPushes = numberOfPushes + 1;
            }

        });
        setOtherUserPosts(shadowArray)


        console.log('Query finished, and it found ' + numberOfPushes + " images that are in the ImagesArray Redux's Global state")
    } catch (error) {
        console.log(error)
    }

}
