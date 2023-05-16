import { View, Text, ScrollView, useColorScheme } from "react-native";
import React from "react";
import StoryBoard from "../Components/HomeScreenComponents/StoryBoard";
import { Divider } from "@ui-kitten/components";

const HomeScreen = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  return (
    <ScrollView
      style={{ backgroundColor: isDarkTheme ? "black" : "white", flex: 1 }}
    >
      {/* Story board grid */}
      <StoryBoard />
      {/* Divider between feed posts and story board */}
      <Divider style={{marginTop:8,height:1}} />
    </ScrollView>
  );
};

export default HomeScreen;
