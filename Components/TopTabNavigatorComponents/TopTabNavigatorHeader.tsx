import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../Navigator/StackNavigator";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const TopTabNavigatorHeader = ({ route }: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const GoBackArrowIcon = () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ position: "absolute", zIndex: 99 }}
    >
      <SimpleLineIcons name="arrow-left" size={20} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", margin: 12, alignItems: "center" }}>
        {/* Go back arrow */}
        <GoBackArrowIcon />
        {/* User name */}
        <View
          style={{
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>
            {route.params.user.username.toUpperCase()}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TopTabNavigatorHeader;
