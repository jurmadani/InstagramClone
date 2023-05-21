import { FlatList, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ProfilePostsRenderItem from "./ProfilePostsRenderItem";

const UserPostsGrid = () => {
  const ImagesArray = useSelector(
    (state) =>
      //@ts-ignore
      state.ProfilePosts.imagesArray
  );
  return (
    <SafeAreaView>
      <FlatList
        data={ImagesArray}
        numColumns={3}
        renderItem={(renderItemObject) => (
          <ProfilePostsRenderItem
            index={renderItemObject.index}
            imageURL={renderItemObject.item.imageURL}
          />
        )}
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
};

export default UserPostsGrid;
