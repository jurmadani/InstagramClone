import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const EditPhotoButton = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log("test")}>
        <Text
          style={{
            color: "#118EE3",
            fontWeight: "600",
            fontSize: 17,
            alignSelf: "center",
            marginTop: 15,
          }}
        >
          Edit photo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditPhotoButton;
