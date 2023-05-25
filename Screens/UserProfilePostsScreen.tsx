import { View, FlatList, RefreshControl } from "react-native";
import React, { useMemo, useState } from "react";
import InstagramPost from "../Components/HomeScreenComponents/InstagramPost";
import { useDispatch, useSelector } from "react-redux";
import { QueryUserPosts } from "../Controllers/QueryUserPosts";
import { UserSlice } from "../Redux/User";
import { firebase } from "../firebase";

const UserProfilePostsScreen = ({ route }: any) => {
  const [refreshing, setRefreshing] = useState(false);
  const ImagesArray = useSelector(
    (state) =>
      //@ts-ignore
      state.ProfilePosts.imagesArray
  );
  const user = useSelector(
    (state) =>
      //@ts-ignore
      state.User.user
  );

  const getItemLayout = (data: any, index: number) => ({
    length: 375,
    offset: 575 * index,
    index,
  });

  // On refresh function

  const dispatch = useDispatch();
  //onRefresh function
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      //get the user posts to display them on profile
      await QueryUserPosts(user.username, dispatch).then(() =>
        console.log(
          "Refreshed the global state for images array from user posts screen with pull to refresh functionality "
        )
      );
    } catch (error) {
      console.log(error);
    }
    //unset the refresh
    setRefreshing(false);
  };
  //Memoized Post to not rerender every time
  const MemoizedInstagramPost = useMemo(() => React.memo(InstagramPost), []);
  const renderItem = ({ item, index }: any) => {
    return (
      <InstagramPost
        userAvatar={user.profilePictureURL}
        username={user.username}
        imageContent={item.imageURL}
        description={item.description}
        arrayLength={ImagesArray.length}
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
        data={ImagesArray}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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

export default UserProfilePostsScreen;
