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
            date={renderItemObject.item.date}
            description={renderItemObject.item.description}
            imageURL={renderItemObject.item.imageURL}
            PeopleThatLiked={renderItemObject.item.PeopleThatLiked}
            postID={renderItemObject.item.postID}
            timestamp={renderItemObject.item.timestamp}
          />
        )}
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
};

export default UserPostsGrid;
