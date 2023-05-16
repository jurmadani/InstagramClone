import { View, Image } from "react-native";
import React from "react";

const PostContent = () => {
  return (
    <View>
      <Image
        source={require("../../assets/Images/dummy-picture-3.png")}
        style={{ height: 375, width: 375 }}
      />
    </View>
  );
};

export default PostContent;
