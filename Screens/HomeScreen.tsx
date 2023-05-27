import {
  View,
  Text,
  ScrollView,
  useColorScheme,
  RefreshControl,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import StoryBoard from "../Components/HomeScreenComponents/StoryBoard";
import { Divider } from "@ui-kitten/components";
import InstagramPost from "../Components/HomeScreenComponents/InstagramPost";
import { useDispatch, useSelector } from "react-redux";
import OtherUserInstagramPost from "../Components/OtherUserProfilePostsScreenComponents/OtherUserInstagramPost";
import { firebase } from "../firebase";
import { UserSlice } from "../Redux/User";
import { HomescreenPostsSlice } from "../Redux/HomescreenPosts";
import SkeletonUIPost from "../Components/HomeScreenComponents/SkeletonUIPost";
import { windowHeight } from "../Constants/Dimensions";

interface UsernameAndProfilePictureArrayProps {
  username: string;
  profilePictureURL: string;
}

const HomeScreen = () => {
  const dispatch = useDispatch();
  const theme = useColorScheme();
  const [skeletonUILoading, setSkeletonUILoading] = useState(false);
  const isDarkTheme = theme === "dark";
  const [refreshing, setRefreshing] = useState(false);
  const homescreenPosts = useSelector(
    (state) =>
      //@ts-ignore
      state.HomescreenPosts.homescreenPostsArray
  );
  const user = useSelector(
    (state) =>
      //@ts-ignore
      state.User.user
  );
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      setSkeletonUILoading(true);
      dispatch(HomescreenPostsSlice.actions.resetInitialState());
      let username: string;
      let followingArray: string[];
      let homescreenPostsPushed = 0;
      let userUsernameAndProfilePictureArray: UsernameAndProfilePictureArrayProps[] =
        [];

      //get all the users
      const result = (await firebase.firestore().collection("Users").get())
        .docs;

      username = user.username;
      followingArray = user.following;

      const queryAllUsersTask = (
        await firebase.firestore().collection("Users").get()
      ).docs;
      queryAllUsersTask.forEach((user) => {
        const userData = user.data();
        userUsernameAndProfilePictureArray.push({
          username: userData.username,
          profilePictureURL: userData.profilePictureURL,
        });
      });
      const queryAllPostsTask = (
        await firebase.firestore().collection("Posts").get()
      ).docs;
      queryAllPostsTask.forEach((post) => {
        const postData = post.data();
        if (followingArray.includes(postData.author)) {
          userUsernameAndProfilePictureArray.forEach((user) => {
            if (user.username === postData.author) {
              dispatch(
                HomescreenPostsSlice.actions.pushPostIntoArray({
                  postID: post.id,
                  imageURL: postData.imageURL,
                  peopleThatLiked: postData.peopleThatLiked,
                  comments: postData.comments,
                  date: postData.date,
                  description: postData.description,
                  timestamp: postData.timestamp,
                  author: postData.author,
                  authorProfilePicture: user.profilePictureURL,
                })
              );
              homescreenPostsPushed = homescreenPostsPushed + 1;
            }
          });
        }
      });
      console.log(
        homescreenPostsPushed +
          " have been added to redux global state of home screen posts "
      );
    } catch (error) {
      console.log(error);
    }
    //unset the refresh
    setRefreshing(false);
    setSkeletonUILoading(false);
  };
  return (
    <ScrollView
      style={{ backgroundColor: isDarkTheme ? "black" : "white", flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
    >
      {/* Story board grid */}
      <StoryBoard />
      {/* Divider between feed posts and story board */}
      <Divider style={{ marginTop: 8, height: 1 }} />
      {/* Posts */}
      {skeletonUILoading ? (
        <SkeletonUIPost />
      ) : homescreenPosts.length === 0 ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            height: windowHeight / 2,
          }}
        >
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>
            No posts available.
          </Text>
          <Text style={{ opacity: 0.4, fontSize: 12, marginTop: 5 }}>
            Start to follow people to see posts
          </Text>
        </View>
      ) : (
        <FlatList
          scrollEnabled={false}
          data={homescreenPosts}
          //@ts-ignore
          renderItem={(item: any, index: any) => (
            <OtherUserInstagramPost
              userAvatar={item.item.authorProfilePicture}
              usernameOfUserThatPosted={item.item.author}
              usernameOfCurrentUserLoggedIn={user.username}
              imageContent={item.item.imageURL}
              description={item.item.description}
              arrayLength={homescreenPosts.length}
              currentIndex={index}
              comments={item.item.comments}
              peopleThatLiked={item.item.peopleThatLiked}
              postID={item.item.postID}
              date={item.item.date}
              timestamp={item.item.timestamp}
              item={item.item}
            />
          )}
        />
      )}
    </ScrollView>
  );
};

export default HomeScreen;
