import { View, Text, TextInput } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";
import { useSelector } from "react-redux";
import { Divider } from "react-native-paper";

const NameInput = () => {
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );
  return (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 20 }}>
      <Text style={{ marginLeft: 15, fontSize: 17 }}>Name</Text>

      <View>
        <TextInput
          placeholder={user.fullName}
          style={{  
            backgroundColor: "white",
            width: windowWidth / 1.5,
            fontSize: 17,
            marginLeft: 15,
          }}
        />
        <Divider style={{ marginTop: 5, marginLeft: 15 }} />
      </View>
    </View>
  );
};

export default NameInput;
