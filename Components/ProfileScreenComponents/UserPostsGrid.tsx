import { View, Text, FlatList, Image, SafeAreaView } from "react-native";
import React from "react";
import { firebase } from "../../firebase";
import { useSelector } from "react-redux";
import { windowWidth } from "../../Constants/Dimensions";

interface RenderItemProps {
  index: number;
  date: string;
  description: string;
  imageURL: string;
  PeopleThatLiked: string[];
  postID: string;
  timestamp: string;
}

const RenderItem = ({
  index,
  date,
  description,
  imageURL,
  PeopleThatLiked,
  postID,
  timestamp,
}: RenderItemProps) => {
  return (
    <Image
      source={{ uri: imageURL }}
      style={{ height: windowWidth / 3.05, width: windowWidth / 3.05, margin: 1 }}
    />
  );
};

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
          <RenderItem
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
