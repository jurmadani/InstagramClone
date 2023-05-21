import { View, Text } from "react-native";
import React from "react";
import { InstagramPostProps } from "./InstagramPost";

const AuthorPostCaption = ({ username, description }: InstagramPostProps) => {
  return (
    <View style={{ marginLeft: 15, marginTop: 10, flexDirection: "row" }}>
      {/* caption */}
      <Text>
        {/* Author post username */}
        <Text
          style={{
            fontSize: 13,
            fontWeight: "bold",
          }}
        >
          {username}{" "}
        </Text>
        {description}
      </Text>
    </View>
  );
};

export default AuthorPostCaption;
