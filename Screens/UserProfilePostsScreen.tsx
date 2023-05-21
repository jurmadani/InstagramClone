import { View, FlatList } from "react-native";
import React, { useMemo } from "react";
import InstagramPost from "../Components/HomeScreenComponents/InstagramPost";
import { useSelector } from "react-redux";

const UserProfilePostsScreen = ({ route }: any) => {
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

  const MemoizedInstagramPost = useMemo(() => React.memo(InstagramPost), []);
  const renderItem = ({ item, index }: any) => (
    <MemoizedInstagramPost
      userAvatar={user.profilePictureURL}
      username={user.username}
      imageContent={item.imageURL}
      description={item.description}
      arrayLength={ImagesArray.length}
      currentIndex={index}
    />
  );

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={ImagesArray}
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
