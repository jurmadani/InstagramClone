import { View, Image, Animated } from "react-native";
import React, { useState } from "react";
import { InstagramPostProps } from "./InstagramPost";
import ImageCache from "../../Controllers/ImageCache";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";
//@ts-ignore
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LikePostFunction, UnlikePostFunction } from "./PostFooter";
import { useDispatch, useSelector } from "react-redux";
import { ProfilePicturePostsSlice } from "../../Redux/ProfilePicturePostsSlice";
import { firebase } from "../../firebase";

//component interface
interface ExtendedInstagramPostProps extends InstagramPostProps {
  liked: boolean;
  setLiked: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostContent = ({
  imageContent,
  postID,
  peopleThatLiked,
  username,
  liked,
  setLiked,
}: ExtendedInstagramPostProps) => {
  const [likePlaceholder, setLikePlaceholder] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const dispatch = useDispatch();

  const tap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(async () => {
      //haptic feedback
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      //heart animation
      setLikePlaceholder(true);
      fadeAnim.setValue(0);

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start(async () => {
            setLikePlaceholder(false);
          });
        }, 350);
      });
      //like function
      if (
        username != undefined &&
        postID != undefined &&
        peopleThatLiked != undefined
      ) {
        if (liked === false) {
          //like functionality
          const tempArray = [...peopleThatLiked]; // Make a copy of the array

          tempArray.push(username); // Modify the copied array
          // push your name into the peopleThatLiked array

          // update firestore
          await LikePostFunction(username, postID, tempArray);
          //update redux
          dispatch(
            ProfilePicturePostsSlice.actions.addNewPeopleThatLiked({
              postID: postID,
              peopleThatLiked: tempArray,
            })
          );

          setLiked(true);
        } else {
          //unlike functionality
          const tempArray = [...peopleThatLiked]; // Make a copy of the array

          const userIndex = tempArray.indexOf(username);

          //delete the user that unliked the photo from the people that like array
          tempArray.splice(userIndex, 1);

          // update firestore
          await UnlikePostFunction(username, postID, tempArray);
          //update redux

          dispatch(
            ProfilePicturePostsSlice.actions.removePeopleThatLiked({
              postID: postID,
              peopleThatLiked: tempArray,
            })
          );

          setLiked(false);
        }
      }
    });

  const LikePlaceholder = () => {
    const iconSize = 130;
    const imageCacheSize = 375;
    const iconPosition = (imageCacheSize - iconSize) / 2;

    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
          position: "absolute",
          top: iconPosition,
          left: iconPosition,
        }}
      >
        <MaterialCommunityIcons name="heart" size={iconSize} color="white" />
      </Animated.View>
    );
  };

  return (
    <GestureDetector gesture={tap}>
      <View>
        <ImageCache
          //@ts-ignore
          uri={imageContent}
          height={375}
          width={375}
          imageType="Images from UserProfilePosts screen"
        />
        {likePlaceholder && <LikePlaceholder />}
      </View>
    </GestureDetector>
  );
};

export default PostContent;
