import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { firebase } from "../firebase";
import UserProfile from "../Components/TopTabNavigatorComponents/UserProfile";

interface userProps {
  email: string;
  followers: string[];
  following: string[];
  fullName: string;
  posts: number;
  profilePictureURL: string;
  username: string;
  description: string;
}

const FollowersScreen = ({ route }: any) => {
  const { user } = route.params.route.params;
  const [followers, setFollowers] = useState<userProps[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let tempArray: userProps[] = [];
      const queryUsersTask = (
        await firebase.firestore().collection("Users").get()
      ).docs;
      queryUsersTask.forEach((firestoreUser) => {
        const userData = firestoreUser.data();
        if (user.followers.includes(userData.username)) {
          //@ts-ignore
          tempArray.push(userData);
        }
      });
      setFollowers(tempArray);
    };
    fetchData().then(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {loading === true ? (
        <ActivityIndicator
          color="black"
          style={{ alignSelf: "center", marginTop: 5 }}
        />
      ) : followers.length === 0 ? (
        <Text style={{ alignSelf: "center", marginTop: 20, fontSize: 16 }}>
          No followers found
        </Text>
      ) : (
        <FlatList
          data={followers}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => <UserProfile item={item} />}
        />
      )}
    </View>
  );
};

export default FollowersScreen;
