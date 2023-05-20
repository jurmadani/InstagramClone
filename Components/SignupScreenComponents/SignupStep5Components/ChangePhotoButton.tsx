import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";

interface ChangePhotoButtonProps {
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

const pickImage = async (
  setImage: React.Dispatch<React.SetStateAction<string>>
) => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};

const ChangePhotoButton = ({ setImage }: ChangePhotoButtonProps) => {
  return (
    <TouchableOpacity
      style={{ alignSelf: "center", marginTop: 10 }}
      onPress={() => pickImage(setImage)}
    >
      <View>
        <Text style={{ fontWeight: "bold", color: "#3797EF", fontSize: 16 }}>
          Change photo
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChangePhotoButton;
