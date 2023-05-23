import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
import { useDispatch, useSelector } from "react-redux";
import { EditAccountFunction } from "../../Controllers/EditAccountFunction";
import { EditAccountSlice } from "../../Redux/EditAccoutSlice";

const EditAccountScreenHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const EditAccountInputsState = useSelector(
    //@ts-ignore
    (state) => state.EditAccount.EditAccountState
  );
  const user = useSelector(
    //@ts-ignore
    (state) => state.User.user
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Use space-between to separate Cancel and Finish buttons
        margin: 15,
      }}
    >
      {/* Cancel button */}
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          dispatch(EditAccountSlice.actions.setToInitialState());
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "400" }}>Cancel</Text>
      </TouchableOpacity>

      {/* Header title */}
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>Edit profile</Text>

      {/* Finish button */}
      <TouchableOpacity
        onPress={() =>
          EditAccountFunction(
            dispatch,
            navigation,
            EditAccountInputsState,
            setLoading,
            user
          )
        }
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={{ color: "#118EE3", fontWeight: "bold", fontSize: 16 }}>
            Done
          </Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditAccountScreenHeader;
