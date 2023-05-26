import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useSelector } from "react-redux";

const OtherUserProfilePostsScreenHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const GoBackArrowIcon = () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ position: "absolute", zIndex: 99 }}
    >
      <SimpleLineIcons name="arrow-left" size={24} />
    </TouchableOpacity>
  );

  const otherUser = useSelector(
    (state) =>
      //@ts-ignore
      state.OtherUser.otherUser
  );
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", margin: 12, alignItems: "center" }}>
        {/* Go back arrow */}
        <GoBackArrowIcon />
        {/* User name */}
        <View
          style={{
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text style={{ opacity: 0.4, fontSize: 12, fontWeight: "600" }}>
            {otherUser.username.toUpperCase()}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 5 }}>
            Posts
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtherUserProfilePostsScreenHeader;
