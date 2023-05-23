import { View, Text, TextInput } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";
import { useSelector } from "react-redux";
import { Divider } from "react-native-paper";

const UserDescriptionInput = () => {
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginTop: 20,
      }}
    >
      <Text style={{ marginLeft: 15, fontSize: 17 }}>Description</Text>

      <View>
        <TextInput
          placeholder={user.description}
          style={{
            backgroundColor: "white",
            width: windowWidth / 1.7,
            fontSize: 17,
            marginLeft: 15,
          }}
        />
        <Divider style={{ marginTop: 5, marginLeft: 15 }} />
      </View>
    </View>
  );
};

export default UserDescriptionInput;
