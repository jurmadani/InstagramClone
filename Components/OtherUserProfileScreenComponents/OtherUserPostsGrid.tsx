import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ImageCache from "../../Controllers/ImageCache";
import { windowWidth } from "../../Constants/Dimensions";
import { Skeleton } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";

type Post = {
  author: string;
  comments: string[];
  date: string;
  description: string;
  imageURL: string;
  peopleThatLiked: string[];
  timestamp: string;
};

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

interface OtherUserPostsGridProps {
  otherUserPostsArray: Post[];
  loadingPhoto: boolean;
  setOtherUserPosts: React.Dispatch<
    React.SetStateAction<OtherUserPostsInterface[]>
  >;
}

interface RenderItemProps {
  imageURL: string;
  index: number;
  loadingPhoto: boolean;
  otherUserPostsArray: Post[];
  setOtherUserPosts: React.Dispatch<
    React.SetStateAction<OtherUserPostsInterface[]>
  >;
}

const ProfilePostsRenderItem = ({
  index,
  imageURL,
  loadingPhoto,
  otherUserPostsArray,
  setOtherUserPosts,
}: RenderItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  //navigation hook
  if (loadingPhoto === true)
    return (
      <Skeleton
        height={windowWidth / 3.05}
        width={windowWidth / 3.05}
        animation="pulse"
      />
    );
  else
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("OtherUserProfilePosts", {
            indexToScroll: index,
            otherUserPostsArray: otherUserPostsArray,
            setOtherUserPosts: setOtherUserPosts,
          })
        }
      >
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

const OtherUserPostsGrid = ({
  otherUserPostsArray,
  loadingPhoto,
  setOtherUserPosts,
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
            loadingPhoto={loadingPhoto}
            otherUserPostsArray={otherUserPostsArray}
            setOtherUserPosts={setOtherUserPosts}
          />
        )}
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
};

export default OtherUserPostsGrid;
