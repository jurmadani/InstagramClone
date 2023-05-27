import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";

const UserNumbers = () => {
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );

  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
    <View style={{ flexDirection: "row", marginLeft: 5 }}>
      {/* Posts */}
      <View style={{ alignItems: "center" }}>
        <Text style={{ opacity: 0.2, fontSize: 16, fontWeight: "700" }}>
          {user.posts}
        </Text>
        <Text>Posts</Text>
      </View>
      {/* Followers */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TopTabNav", {
            user: user,
          })
        }
      >
        <View style={{ alignItems: "center", marginLeft: 30 }}>
          <Text style={{ fontWeight: "700", fontSize: 16 }}>
            {user.followers.length}
          </Text>
          <Text>Followers</Text>
        </View>
      </TouchableOpacity>
      {/* Following */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TopTabNav", {
            user: user,
          })
        }
      >
        <View style={{ alignItems: "center", marginLeft: 30 }}>
          <Text style={{ fontWeight: "700", fontSize: 16 }}>
            {user.following.length}
          </Text>
          <Text>Following</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserNumbers;
