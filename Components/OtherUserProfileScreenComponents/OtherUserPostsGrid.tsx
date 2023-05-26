import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ImageCache from "../../Controllers/ImageCache";
import { windowWidth } from "../../Constants/Dimensions";

interface RenderItemProps {
  imageURL: string;
  index: number;
}

const ProfilePostsRenderItem = ({ index, imageURL }: RenderItemProps) => {
  //navigation hook
  return (
    <TouchableOpacity>
      <ImageCache
        uri={imageURL}
        height={windowWidth / 3.05}
        width={windowWidth / 3.05}
        margin={1}
        imageType="ProfilePost Image"
      />
    </TouchableOpacity>
  );
};

type Post = {
  author: string;
  comments: string[];
  date: string;
  description: string;
  imageURL: string;
  peopleThatLiked: string[];
  timestamp: string;
};

interface OtherUserPostsGridProps {
  otherUserPostsArray: Post[];
}

const OtherUserPostsGrid = ({
  otherUserPostsArray,
}: OtherUserPostsGridProps) => {
  return (
    <SafeAreaView>
      <FlatList
        data={otherUserPostsArray}
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

export default OtherUserPostsGrid;
