import { View, Text, TextInput } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "react-native-paper";
import { EditAccountSlice } from "../../Redux/EditAccoutSlice";

interface NameInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const NameInput = ({ value, onChangeText }: NameInputProps) => {
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );
  const dispatch = useDispatch();
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
          value={value}
          onChangeText={onChangeText}
          onBlur={() => dispatch(EditAccountSlice.actions.setFullName(value))}
        />
        <Divider style={{ marginTop: 5, marginLeft: 15 }} />
      </View>
    </View>
  );
};

export default NameInput;
