import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Notification from "../Components/NotificationsScreenComponents/Notification";
import { windowHeight } from "../Constants/Dimensions";

const NotificationsScreen = () => {
  const notifications = useSelector(
    (state) =>
      //@ts-ignore
      state.Notifications.notificationsArray
  );

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {notifications.length === 0 ? (
        <View>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 18,
              top: windowHeight / 2.6,
            }}
          >
            No new notifications
          </Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => <Notification notification={item.item} />}
        />
      )}
    </View>
  );
};

export default NotificationsScreen;
