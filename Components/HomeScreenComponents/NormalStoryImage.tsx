import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { PeopleProps } from "../../dummy-test-data";
import { Avatar } from "@ui-kitten/components";

interface NormalStoryImageProp {
  item: PeopleProps;
}

const NormalStoryImage = ({ item }: NormalStoryImageProp) => {
  return (
    <TouchableOpacity >
      <View style={{ marginLeft: 20 }}>
        <View
          style={{
            borderWidth: 2,
            height: 75,
            width: 75,
            borderColor: "red",
            borderRadius: 99999,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            style={{
              height: 66,
              width: 66,
            }}
            source={item.poza}
          />
        </View>
        <Text style={{ textAlign: "center", fontSize: 11, marginTop: 5 }}>
          {item.nume.length >= 10 ? item.nume.slice(0, 10) + "..." : item.nume}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NormalStoryImage;
