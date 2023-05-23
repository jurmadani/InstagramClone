import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";

const EditAccountScreenHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 16, fontWeight: "400" }}>Cancel</Text>
      </TouchableOpacity>

      {/* Header title */}
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>Edit profile</Text>

      {/* Finish button */}
      <TouchableOpacity>
        <Text style={{ color: "#118EE3", fontWeight: "bold", fontSize: 16 }}>
          Done
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditAccountScreenHeader;