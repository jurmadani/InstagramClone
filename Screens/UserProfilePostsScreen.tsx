import { View, FlatList } from "react-native";
import React from "react";
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
    length: 375, // Adjust this value based on your item's height
    offset: 575 * index,
    index,
  });
  const { indexToScroll } = route.params.indexToScroll;
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
        renderItem={(renderItemObject) => (
          <InstagramPost
            userAvatar={user.profilePictureURL}
            username={user.username}
            imageContent={renderItemObject.item.imageURL}
            description={renderItemObject.item.description}
            arrayLength={ImagesArray.length}
            currentIndex={renderItemObject.index}
          />
        )}
      />
    </View>
  );
};

export default UserProfilePostsScreen;
