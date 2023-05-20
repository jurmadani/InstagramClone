import { View, Text, ScrollView } from "react-native";
import React from "react";
import AddStoryImage from "./AddStoryImage";
import { People } from "../../dummy-test-data";
import NormalStoryImage from "./NormalStoryImage";


const StoryBoard = () => {
  return (
    <ScrollView
      style={{ flexDirection: "row" }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {/* Your story + add button */}
      <AddStoryImage />
      {/* Other people stories */}
      {People.map((item) => (
        <NormalStoryImage item={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

export default StoryBoard;
