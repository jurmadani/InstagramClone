import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "@ui-kitten/components";

const CommentsPostSection = () => {
  return (
    <View style={{ marginLeft: 15, marginTop: 5 }}>
      <TouchableOpacity>
        {/* Comment count */}
        <Text style={{ opacity: 0.2 }}>View all the 256 comments</Text>
      </TouchableOpacity>
      {/* Timestamp */}
      <Text style={{ opacity: 0.2, fontSize: 10, marginTop: 5 }}>
        2 days ago
      </Text>
    </View>
  );
};

export default CommentsPostSection;
