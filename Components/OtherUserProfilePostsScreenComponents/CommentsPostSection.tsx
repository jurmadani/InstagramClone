import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Divider } from "@ui-kitten/components";
import moment from "moment";
import { InstagramPostProps } from "../HomeScreenComponents/InstagramPost";
import { OtherUserInstagramPostProps } from "./OtherUserInstagramPost";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
import { ExtendedInstagramPostProps } from "./PostFooter";

const CommentsPostSection = ({
  comments,
  timestamp,
  date,
  usernameOfUserThatPosted,
  description,
  postID,
  setCommentsArrayState,
}: ExtendedInstagramPostProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const getTimePassed = (timestamp: string, date: string) => {
    const currentDate = moment();
    const postDate = moment(`${date} ${timestamp}`, "D/M/YYYY HH:mm:ss");
    const timeDiffMinutes = currentDate.diff(postDate, "minutes");

    if (timeDiffMinutes <= 60) {
      return `${timeDiffMinutes}m`;
    } else if (timeDiffMinutes <= 1440) {
      const timeDiffHours = Math.floor(timeDiffMinutes / 60);
      return `${timeDiffHours}h`;
    } else {
      const timeDiffDays = Math.floor(timeDiffMinutes / 1440);
      return `${timeDiffDays}d`;
    }
  };
  let passedTime = "";
  if (timestamp != undefined && date != undefined)
    passedTime = getTimePassed(timestamp, date);

  return (
    <View>
      {comments?.length === 0 ? (
        <View>
          <Text style={{ marginLeft: 10, marginTop: 5, opacity: 0.4 }}>
            {" "}
            No comments
          </Text>
        </View>
      ) : (
        <View style={{ marginLeft: 15, marginTop: 5 }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AddComment", {
                commentsArray: comments,
                postOwner: usernameOfUserThatPosted,
                description: description,
                timestamp: timestamp,
                date: date,
                postID: postID,
                setCommentsArrayState: setCommentsArrayState,
              })
            }
          >
            {/* Comment count */}
            <Text style={{ opacity: 0.2 }}>
              View all the {comments?.length} comments
            </Text>
          </TouchableOpacity>
          {/* Timestamp */}
          <Text style={{ opacity: 0.2, fontSize: 10, marginTop: 5 }}>
            {passedTime}
          </Text>
        </View>
      )}
    </View>
  );
};

export default CommentsPostSection;
