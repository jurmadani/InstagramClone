import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar } from "@ui-kitten/components";
import { windowWidth } from "../../Constants/Dimensions";
import moment from "moment";
import { Divider } from "react-native-paper";
import { firebase } from "../../firebase";
import ImageCache from "../../Controllers/ImageCache";

interface UserPostDescriptionProps {
  description: string;
  postOwner: string;
  timestamp: string;
  date: string;
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

const UserPostDescription = ({
  description,
  postOwner,
  timestamp,
  date,
}: UserPostDescriptionProps) => {
  const timePassed = getTimePassed(timestamp, date);
  const [profilePictureURL, setProfilePictureURL] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //query for author's profile picture
  useEffect(() => {
    const fetchProfilePictureURL = async () => {
      try {
        const userSnapshot = await firebase
          .firestore()
          .collection("Users")
          .doc(postOwner)
          .get();

        if (userSnapshot != undefined) {
          //@ts-ignore
          const url = userSnapshot.data().profilePictureURL;
          setProfilePictureURL(url);
        }
      } catch (error) {
        console.error("Error fetching profile picture URL:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfilePictureURL();
  }, []);

  return (
    <View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        {isLoading ? (
          <Avatar
            source={require("../../assets/Images/lazyload-gif.gif")}
            style={{ height: 40, width: 40 }}
          />
        ) : (
          <ImageCache
            uri={profilePictureURL}
            height={40}
            width={40}
            borderRadius={99}
            imageType="User post description photo"
          />
        )}

        <View style={{ marginLeft: 10 }}>
          <View style={{ flexDirection: "row" }}>
            {/* Username */}
            <Text>{postOwner}</Text>
            {/* Timestamp */}
            <Text style={{ opacity: 0.3, marginLeft: 8 }}>{timePassed}</Text>
          </View>
          {/* Description */}
          <Text style={{ width: windowWidth - 70, marginTop: 2 }}>
            {description}
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default UserPostDescription;
