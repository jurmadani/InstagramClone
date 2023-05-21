import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Share,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { firebase } from "../../firebase";
import uuid from "react-native-uuid";

interface ShareButtonProps {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const ShareButton = ({ setImage, setDescription }: ShareButtonProps) => {
  const [loading, setLoading] = useState(false);

  const postImageURL = useSelector(
    //@ts-expect-error
    (state) => state.SharePost.postImage
  );

  const postDescriptionText = useSelector(
    //@ts-expect-error
    (state) => state.SharePost.postDescription
  );

  const ActiveStatus = useSelector(
    //@ts-expect-error
    (state) => state.SharePost.shareButtonActive
  );
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );

  const SharePostFunction = async () => {
    setLoading(true);
    try {
      //get now date
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds

      //upload the picture to storage

      //@ts-ignore
      const response = await fetch(postImageURL);
      const blob = await response.blob();

      const uniqueIDForStorageFile = uuid.v4();

      var uploadTask = firebase
        .storage()
        .ref("Posts")
        .child(uniqueIDForStorageFile.toString())
        .put(blob);

      //upload the picture to firebase
      await uploadTask;

      //getDownloadURL
      const urlRef = firebase
        .storage()
        .ref("Posts")
        .child(uniqueIDForStorageFile.toString());

      const url = (await urlRef.getDownloadURL()).toString();
      //upload the post to firestore
      await firebase
        .firestore()
        .collection("Posts")
        .add({
          author: user.username,
          date: date + "/" + month + "/" + year,
          timestamp: hours + ":" + min + ":" + sec,
          description: postDescriptionText,
          imageURL: url,
          peopleThatLiked: [],
          comments: [],
        });
      //update the posts number for the user in database
      //get the user post number
      const currentUserPostsNumber = (
        await firebase.firestore().collection("Users").doc(user.username).get()
      ).data()?.posts;

      await firebase
        .firestore()
        .collection("Users")
        .doc(user.username)
        .update({
          posts: currentUserPostsNumber + 1,
        });

      Alert.alert("Picture has been posted successfully.");
      setDescription("");
      setImage("");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <TouchableOpacity
      style={{ alignSelf: "center", marginTop: 15 }}
      disabled={ActiveStatus}
      onPress={SharePostFunction}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={{
            fontWeight: "600",
            fontSize: 17,
            color: "#118EE3",
            opacity: ActiveStatus ? 0.4 : 1,
          }}
        >
          Share
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ShareButton;
