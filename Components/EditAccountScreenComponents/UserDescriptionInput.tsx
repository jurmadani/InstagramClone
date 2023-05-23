import { View, Text, TextInput } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "react-native-paper";
import { EditAccountSlice } from "../../Redux/EditAccoutSlice";

interface UserDescriptionInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const UserDescriptionInput = ({
  value,
  onChangeText,
}: UserDescriptionInputProps) => {
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
        marginTop: 20,
      }}
    >
      <Text style={{ marginLeft: 15, fontSize: 17 }}>Description</Text>

      <View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={user.description}
          style={{
            backgroundColor: "white",
            width: windowWidth / 1.7,
            fontSize: 17,
            marginLeft: 15,
          }}
          onBlur={() =>
            dispatch(EditAccountSlice.actions.setDescription(value))
          }
        />
        <Divider style={{ marginTop: 5, marginLeft: 15 }} />
      </View>
    </View>
  );
};

export default UserDescriptionInput;
