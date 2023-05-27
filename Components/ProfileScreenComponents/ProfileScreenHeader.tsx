import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";

const LockIcon = () => <Ionicons name="lock-closed-outline" size={18} />;

const MenuIcon = () => (
  <TouchableOpacity>
    <Feather name="menu" size={26} />
  </TouchableOpacity>
);
const ProfileScreenHeader = () => {
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          marginLeft: 17,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 8,
          marginBottom: 5,
        }}
      >
        {/* Lock icon */}
        <LockIcon />
        <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 5 }}>
          {user.username}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end", marginRight: 18 }}>
        <MenuIcon />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreenHeader;
