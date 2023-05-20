import { View, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { windowWidth } from "../../../Constants/Dimensions";
import { Button } from "@ui-kitten/components";
import * as ImagePicker from "expo-image-picker";

interface AddPhotoButtonProps {
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

const pickImage = async (
  setImage: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    setImage(result.assets[0].uri);
    setLoading(false);
  }
  setLoading(false);
};

const AddPhotoButton = ({ setImage }: AddPhotoButtonProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={{ alignSelf: "center" }}>
      <Button
        style={{
          backgroundColor: "#3797EF",
          borderWidth: 0,
          width: windowWidth - 60,
          marginTop: 20,
        }}
        size="large"
        onPress={() => pickImage(setImage, setLoading)}
      >
        {loading ? <ActivityIndicator color="white" /> : "Add a Photo"}
      </Button>
    </View>
  );
};

export default AddPhotoButton;
