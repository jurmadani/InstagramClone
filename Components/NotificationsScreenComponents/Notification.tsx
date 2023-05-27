import { View, Text } from "react-native";
import React from "react";
import { NotificationPayload } from "../../Redux/NotificationsSlice";
import ImageCache from "../../Controllers/ImageCache";
import { windowWidth } from "../../Constants/Dimensions";
import moment from "moment";

interface NotificationProp {
  notification: NotificationPayload;
}

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

const NotificationLike = ({ notification }: NotificationProp) => {
  let timePassed;
  if (notification.date != undefined && notification.timestamp != undefined) {
    timePassed = getTimePassed(notification.timestamp, notification.date);
  }
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {/* Picture of user that liked photo */}
      <ImageCache
        //@ts-ignore
        uri={notification.senderProfilePictureURL}
        height={50}
        width={50}
        borderRadius={99}
        margin={10}
        imageType="Notification sender profile picture"
      />
      <Text style={{ width: windowWidth / 1.9, textAlign: "left" }}>
        <Text style={{ fontWeight: "bold" }}>{notification.sender}</Text>
        <Text>
          {" "}
          liked your photo • <Text style={{ opacity: 0.3 }}>{timePassed}</Text>
        </Text>
        <Text></Text>
      </Text>
      <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 13 }}>
        <ImageCache
          //@ts-ignore
          uri={notification.pictureThatSenderLiked}
          height={55}
          width={55}
          imageType="Picture that sender liked"
        />
      </View>
    </View>
  );
};

const Notification = ({ notification }: NotificationProp) => {
  return (
    <View>
      {notification.notificationType === "Like" ? (
        <NotificationLike notification={notification} />
      ) : (
        <Text>Follow</Text>
      )}
    </View>
  );
};

export default Notification;
