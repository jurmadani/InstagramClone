import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "@ui-kitten/components";

const LikedBySection = () => {
  return (
    <View style={{ marginLeft: 15, marginTop: 10, flexDirection: "row" }}>
      {/* First person that liked the photo image */}
      <Avatar
        source={require("../../assets/Images/dummy-picture.jpg")}
        style={{ height: 17, width: 17 }}
      />
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

export default LikedBySection;
