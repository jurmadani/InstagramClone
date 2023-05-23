import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { EditAccountSlice } from "../../Redux/EditAccoutSlice";

interface EditPhotoButtonProps {
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

const EditPhotoButton = ({ setImage }: EditPhotoButtonProps) => {
  const dispatch = useDispatch();

  const AddNewProfilePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      //set the image variable to display it instead of the current profile picture (preview effect)
      setImage(result.assets[0].uri);
      //set redux global state
      dispatch(EditAccountSlice.actions.setImageUri(result.assets[0].uri));
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={AddNewProfilePhoto}>
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
