import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//@ts-expect-error
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../Screens/HomeScreen";
import SearchScreen from "../Screens/SearchScreen";
import AddPostScreen from "../Screens/AddPostScreen";
import ReelsScreen from "../Screens/ReelsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import HomeScreenHeader from "../Components/HomeScreenComponents/HomeScreenHeader";
import ProfileScreenHeader from "../Components/ProfileScreenComponents/ProfileScreenHeader";

export type BottomTabParams = {
  Home: any;
  Search: any;
  Add: any;
  Reels: any;
  Profile: any;
};

const Tab = createBottomTabNavigator<BottomTabParams>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          height: 90,
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";
          else if (route.name === "Add")
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          else if (route.name === "Search")
            iconName = focused ? "search" : "search-outline";
          else if (route.name === "Profile")
            iconName = focused ? "person" : "person-outline";
          else if (route.name === "Reels")
            iconName = focused ? "md-videocam" : "md-videocam-outline";

          return (
            <Ionicons
              name={iconName}
              size={28}
              color={color}
              style={{ marginTop: 7 }}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => <HomeScreenHeader /> }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Add" component={AddPostScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ header: () => <ProfileScreenHeader /> }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
