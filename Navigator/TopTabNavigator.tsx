import { Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FollowersScreen from "../Screens/FollowersScreen";
import FollowingScreen from "../Screens/FollowingScreen";

export type TopTabParams = {
  Followers: any;
  Following: any;
};

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({ route }: any) => {
  // Example counts for followers and following
  const followersCount = route.params.user.followers.length;
  const followingCount = route.params.user.following.length;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: () => {
          let label = "";
          let count = 0;
          if (route.name === "Followers") {
            label = "Followers";
            count = followersCount;
          } else if (route.name === "Following") {
            label = "Following";
            count = followingCount;
          }

          return (
            <Text style={{ fontWeight: "normal", fontSize: 14 }}>
              {count} {label}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen
        name="Followers"
        component={FollowersScreen}
        initialParams={{ route }}
      />
      <Tab.Screen
        name="Following"
        component={FollowingScreen}
        initialParams={{ route }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
