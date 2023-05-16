import {
  View,
  Text,
  ScrollView,
  useColorScheme,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import StoryBoard from "../Components/HomeScreenComponents/StoryBoard";
import { Divider } from "@ui-kitten/components";

const HomeScreen = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 700);
  }, []);
  return (
    <ScrollView
      style={{ backgroundColor: isDarkTheme ? "black" : "white", flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Story board grid */}
      <StoryBoard />
      {/* Divider between feed posts and story board */}
      <Divider style={{ marginTop: 8, height: 1 }} />
    </ScrollView>
  );
};

export default HomeScreen;
