import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

const AddPostScreenHeader = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
      }}
    >
      {/* Header text */}

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          marginTop: 15,
          textAlign: "center",
        }}
      >
        New Post
      </Text>
    </SafeAreaView>
  );
};

export default AddPostScreenHeader;
