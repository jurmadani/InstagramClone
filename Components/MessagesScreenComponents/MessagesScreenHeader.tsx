import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";

const MessagesScreenHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const GoBackArrowIcon = () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <SimpleLineIcons name="arrow-left" size={24} />
    </TouchableOpacity>
  );

  const WriteNewMessageIcon = () => (
    <TouchableOpacity>
      <Feather name="edit" size={24} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", margin: 12, alignItems: "center" }}>
        {/* Go back arrow icon */}
        <GoBackArrowIcon />
        {/* User name */}
        <Text style={{ fontWeight: "bold", fontSize: 24, marginLeft: 10 }}>
          d.jurma
        </Text>
        <View style={{ flex: 1, alignItems: "flex-end", marginRight: 10 }}>
          <WriteNewMessageIcon />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MessagesScreenHeader;
