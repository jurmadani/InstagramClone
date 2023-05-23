import { View, Text, TextInput } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "react-native-paper";
import { EditAccountSlice } from "../../Redux/EditAccoutSlice";

interface UsernameInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const UsernameInput = ({ value, onChangeText }: UsernameInputProps) => {
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginTop: 10,
      }}
    >
      <Text style={{ marginLeft: 15, fontSize: 17 }}>Username</Text>

      <View>
        <TextInput
          placeholder={user.username}
          style={{
            backgroundColor: "white",
            width: windowWidth / 1.7,
            fontSize: 17,
            marginLeft: 15,
          }}
          value={value}
          onChangeText={onChangeText}
          onBlur={() => dispatch(EditAccountSlice.actions.setUsername(value))}
        />
        <Divider style={{ marginTop: 5, marginLeft: 15 }} />
      </View>
    </View>
  );
};

export default UsernameInput;
