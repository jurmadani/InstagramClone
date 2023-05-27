import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  useColorScheme,
} from "react-native";
import React from "react";
import InstagramTextLogoHeader from "./InstagramTextLogo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { StackParams } from "../../Navigator/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const HomeScreenHeader = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const HeartIcon = () => (
    <TouchableOpacity
      style={{ marginRight: 19 }}
      onPress={() => navigation.navigate("Notifications")}
    >
      <MaterialCommunityIcons
        name="heart-outline"
        size={27}
        color={isDarkTheme ? "white" : "black"}
      />
    </TouchableOpacity>
  );

  const MessagesIcon = () => (
    <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
      <Image
        source={require("../../assets/Icons/facebook-messenger.png")}
        style={{
          height: 27,
          width: 27,
          tintColor: isDarkTheme ? "white" : "black",
        }}
      />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: isDarkTheme ? "black" : "white",
      }}
    >
      {/* Instagram logo */}
      <View style={{ marginLeft: 15, marginTop: 11, marginBottom: 5 }}>
        <InstagramTextLogoHeader />
      </View>
      <View
        style={{
          flex: 1,
          marginRight: 18,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <HeartIcon />
        <MessagesIcon />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenHeader;
