import { View, Text } from "react-native";
import React from "react";

const AuthorPostCaption = () => {
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
          d.jurma{" "}
        </Text>
        The game in Japan was amazing and I want to share some photos
      </Text>
    </View>
  );
};

export default AuthorPostCaption;
