import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
//@ts-expect-error
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const AddCommentScreenHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const GoBackArrowIcon = () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ position: "absolute", zIndex: 99 }}
    >
      <SimpleLineIcons name="arrow-left" size={22} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", margin: 12, alignItems: "center" }}>
        {/* Go back arrow */}
        <GoBackArrowIcon />
        {/* Header text */}
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={{ fontWeight: "700", fontSize: 15 }}>Comments</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddCommentScreenHeader;
