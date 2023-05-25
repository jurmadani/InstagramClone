import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { Divider } from "@ui-kitten/components";
import UserPostDescription from "../Components/AddCommentScreenComponents/UserPostDescription";
import AddCommentBox from "../Components/AddCommentScreenComponents/AddCommentBox";
import { FlatList } from "react-native-gesture-handler";
import Comment from "../Components/AddCommentScreenComponents/Comment";
import { useHeaderHeight } from "@react-navigation/elements";

export interface CommentsArrayMutableProps {
  username: string;
  comment: string;
  profilePictureURL: string;
  timestamp: string;
  date: string;
}

const AddCommentScreen = ({ route }: any) => {
  const headerHeight = useHeaderHeight();
  const [commentsArrayMutable, setCommentsArrayMutable] = useState<
    CommentsArrayMutableProps[]
  >([]);
  const { commentsArray, description, postOwner, timestamp, date, postID } =
    route.params;
  useEffect(() => {
    setCommentsArrayMutable(commentsArray);
  }, []);
  const dataWithHeader = [{ isHeader: true }, ...commentsArrayMutable];
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={headerHeight}
    >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          data={dataWithHeader}
          renderItem={({ item, index }) => {
            if (index === 0)
              return (
                <UserPostDescription
                  postOwner={postOwner}
                  description={description}
                  timestamp={timestamp}
                  date={date}
                />
              );
            //@ts-ignore
            else return <Comment commentObject={item} />;
          }}
        />
        <Divider style={{ marginBottom: 15 }} />
        <AddCommentBox
          postID={postID}
          commentsArray={commentsArrayMutable}
          setMutableArray={setCommentsArrayMutable}
        />
      </View>
      {/* Comment footer box */}
    </KeyboardAvoidingView>
  );
};

export default AddCommentScreen;
