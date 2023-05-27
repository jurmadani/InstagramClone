import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { windowWidth } from "../Constants/Dimensions";
import Message from "../Components/MessagesScreenComponents/Message";
import { FlatList } from "react-native-gesture-handler";
import { People } from "../dummy-test-data";

const MessagesScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        {/* Search bar */}
        <Searchbar
          placeholder="Search"
          style={{
            width: windowWidth - 25,
            alignSelf: "center",
            borderRadius: 10,
            height: 36,
            backgroundColor: "#E1E1E1",
            alignItems: "center",
          }}
          inputStyle={{
            alignSelf: "center",
          }}
        />
        {/* Header text */}
        <Text
          style={{
            fontWeight: "bold",
            marginLeft: 15,
            fontSize: 16,
            marginTop: 10,
          }}
        >
          Messages
        </Text>
        {/* Message component */}
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={People}
          renderItem={(item) => <Message item={item.item} />}
        />
      </View>
    </ScrollView>
  );
};

export default MessagesScreen;
