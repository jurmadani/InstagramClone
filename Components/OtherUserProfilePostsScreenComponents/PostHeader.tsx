import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Divider } from "@ui-kitten/components";
import Feather from "react-native-vector-icons/Feather";
import { InstagramPostProps } from "../HomeScreenComponents/InstagramPost";
import { useDispatch, useSelector } from "react-redux";
import { OtherUserSlice } from "../../Redux/OtherUser";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
import { firebase } from "../../firebase";

const MoreIcon = () => (
  <TouchableOpacity>
    <Feather name="more-horizontal" size={25} />
  </TouchableOpacity>
);

const fetchUserData = async (username: string) => {
  const user = (
    await firebase.firestore().collection("Users").doc(username).get()
  ).data();
  return user;
};

const PostHeader = ({ userAvatar, username, item }: InstagramPostProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const user = useSelector(
    (state) =>
      //@ts-ignore
      state.User.user
  );
  return (
    <TouchableOpacity
      onPress={async () => {
        fetchUserData(item.author).then(async () => {
          const otherUser = await fetchUserData(item.author);
          dispatch(OtherUserSlice.actions.setOtherUser(otherUser));
          navigation.navigate("OtherUserProfile", {
            userInformation: otherUser,
          });
        });
      }}
    >
      <View style={{ flexDirection: "row", margin: 13 }}>
        {/* User's profile picture who posted   */}
        <Avatar
          source={{ uri: userAvatar }}
          style={{
            height: 35,
            width: 35,
          }}
        />
        <Text
          style={{ fontWeight: "600", alignSelf: "center", marginLeft: 10 }}
        >
          {username}
        </Text>
        {/* More icon */}
        <View
          style={{
            alignSelf: "center",
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <MoreIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostHeader;
