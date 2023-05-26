import { View, Text } from "react-native";
import React, { useState } from "react";
import { Avatar } from "@ui-kitten/components";
import ImageCache from "../../Controllers/ImageCache";
import { firebase } from "../../firebase";
import { useSelector } from "react-redux";
import { InstagramPostProps } from "../HomeScreenComponents/InstagramPost";

const LikedBySection = ({ peopleThatLiked }: InstagramPostProps) => {
  if (peopleThatLiked?.length === 0) return null;

  return (
    <View>
      <Text style={{ marginLeft: 15, marginTop: 10 }}>
        Likes:{" "}
        <Text style={{ fontWeight: "bold" }}>
          {
            //@ts-ignore
            peopleThatLiked[0]
          }
        </Text>
        {peopleThatLiked?.length != 1 && <Text> and </Text>}
        {peopleThatLiked?.length != 1 && (
          <Text style={{ fontWeight: "bold" }}>
            other{" "}
            {
              //@ts-ignore
              peopleThatLiked?.length - 1
            }
          </Text>
        )}
      </Text>
    </View>
  );
};

export default LikedBySection;
