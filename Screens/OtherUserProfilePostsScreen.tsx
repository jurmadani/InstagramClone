import { View, FlatList, RefreshControl, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { QueryUserPosts } from "../Controllers/QueryUserPosts";
import { useDispatch, useSelector } from "react-redux";
import InstagramPost from "../Components/HomeScreenComponents/InstagramPost";
import OtherUserInstagramPost from "../Components/OtherUserProfilePostsScreenComponents/OtherUserInstagramPost";
import { QueryOtherUserPosts } from "../Controllers/QueryOtherUserPosts";

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

const OtherUserProfilePostsScreen = ({ route }: any) => {
  const otherUser = useSelector(
    (state) =>
      //@ts-ignore
      state.OtherUser.otherUser
  );
  const user = useSelector(
    (state) =>
      //@ts-ignore
      state.User.user
  );
  const [refreshing, setRefreshing] = useState(false);
  const { setOtherUserPosts } = route.params;
  const getItemLayout = (data: any, index: number) => ({
    length: 375,
    offset: 575 * index,
    index,
  });

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      //get the user posts to display them on profile
      await QueryOtherUserPosts(otherUser.username, setOtherUserPosts);
    } catch (error) {
      console.log(error);
    }
    //unset the refresh
    setRefreshing(false);
  };

  const renderItem = ({ item, index }: any) => {
    return (
      <OtherUserInstagramPost
        userAvatar={otherUser.profilePictureURL}
        usernameOfUserThatPosted={otherUser.username}
        usernameOfCurrentUserLoggedIn={user.username}
        imageContent={item.imageURL}
        description={item.description}
        arrayLength={route.params.otherUserPostsArray.length}
        currentIndex={index}
        peopleThatLiked={item.peopleThatLiked}
        comments={item.comments}
        postID={item.postID}
        timestamp={item.timestamp}
        date={item.date}
      />
    );
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={route.params.otherUserPostsArray}
        initialScrollIndex={
          route.params.indexToScroll != undefined
            ? route.params.indexToScroll
            : 0
        }
        getItemLayout={getItemLayout}
        renderItem={renderItem}
      />
    </View>
  );
};

export default OtherUserProfilePostsScreen;
