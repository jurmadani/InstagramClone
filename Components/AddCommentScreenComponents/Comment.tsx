import { View, Text } from "react-native";
import React from "react";
import moment from "moment";
import ImageCache from "../../Controllers/ImageCache";
import { Divider } from "react-native-paper";
import { windowWidth } from "../../Constants/Dimensions";

interface CommentsArrayMutableProps {
  username: string;
  comment: string;
  profilePictureURL: string;
  timestamp: string;
  date: string;
}

interface CommentProps {
  commentObject: CommentsArrayMutableProps;
}

const Comment = ({ commentObject }: CommentProps) => {
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
  const timePassed = getTimePassed(commentObject.timestamp, commentObject.date);
  return (
    <View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <ImageCache
          uri={commentObject.profilePictureURL}
          height={40}
          width={40}
          borderRadius={99}
          imageType="User photo that commented"
        />

        <View style={{ marginLeft: 10 }}>
          <View style={{ flexDirection: "row" }}>
            {/* Username */}
            <Text>{commentObject.username}</Text>
            {/* Timestamp */}
            <Text style={{ opacity: 0.3, marginLeft: 8 }}>{timePassed}</Text>
          </View>
          {/* Comment */}
          <Text style={{ width: windowWidth - 70, marginTop: 2 }}>
            {commentObject.comment}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Comment;
