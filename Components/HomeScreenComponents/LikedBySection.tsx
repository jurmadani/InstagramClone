import { View, Text } from "react-native";
import React, { useState } from "react";
import { Avatar } from "@ui-kitten/components";
import { InstagramPostProps } from "./InstagramPost";
import ImageCache from "../../Controllers/ImageCache";
import { firebase } from "../../firebase";
import { useSelector } from "react-redux";

const TotalLikesOnPost = ({ peopleThatLiked }: InstagramPostProps) => {
  return (
    <View style={{ marginLeft: 15, marginTop: 10, flexDirection: "row" }}>
      {/* First person that liked the photo image */}
      {/**
        
      <ImageCache uri={image} height={17} width={17} borderRadius={999} />
       
       */}
      <Text style={{ marginLeft: 10, fontSize: 13, textAlign: "center" }}>
        Liked by
      </Text>
      {/* First user that liked the photo */}
      <Text
        style={{
          marginLeft: 5,
          fontSize: 13,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        craig_love
      </Text>
      {/* and the rest of the likes(total likes) */}
      <Text style={{ marginLeft: 5, fontSize: 13, textAlign: "center" }}>
        and
      </Text>
      <Text
        style={{
          marginLeft: 5,
          fontSize: 13,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        44,686 others
      </Text>
    </View>
  );
};

const LikedBySection = ({
  peopleThatLiked,
  lastUserThatLiked,
}: InstagramPostProps) => {
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
