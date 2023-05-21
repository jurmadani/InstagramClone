import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Divider } from "@ui-kitten/components";
import { InstagramPostProps } from "./InstagramPost";

const CommentsPostSection = ({ comments }: InstagramPostProps) => {
  return (
    <View>
      {comments?.length === 0 ? (
        <View>
          <Text style={{marginLeft:10, marginTop:5, opacity:0.4}}> No comments</Text>
        </View>
      ) : (
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
      )}
    </View>
  );
};

export default CommentsPostSection;
