import { View, Text } from "react-native";
import React from "react";

const UsernameAndCaption = () => {
  return (
    <View style={{ marginLeft: 20 }}>
      {/* Username */}
      <Text style={{ fontWeight: "600", fontSize: 15 }}>Daniel Jurma</Text>
      {/* description */}
      <Text style={{marginTop:5,}}>Digital goodies designer @pixsellz Everything is designed.</Text>
    </View>
  );
};

export default UsernameAndCaption;
