import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
//@ts-expect-error
import Ionicons from "react-native-vector-icons/Ionicons";
//@ts-expect-error
import Feather from "react-native-vector-icons/Feather";

const LockIcon = () => <Ionicons name="lock-closed-outline" size={18} />;

const MenuIcon = () => (
  <TouchableOpacity>
    <Feather name="menu" size={26} />
  </TouchableOpacity>
);
const ProfileScreenHeader = () => {
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
          d.jurma
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end", marginRight: 18 }}>
        <MenuIcon />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreenHeader;
