import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Divider } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import EditPhotoButton from "../Components/EditAccountScreenComponents/EditPhotoButton";
import NameInput from "../Components/EditAccountScreenComponents/NameInput";
import UsernameInput from "../Components/EditAccountScreenComponents/UsernameInput";
import UserDescriptionInput from "../Components/EditAccountScreenComponents/UserDescriptionInput";
import ImageCache from "../Controllers/ImageCache";
import { EditAccountSlice } from "../Redux/EditAccoutSlice";

const EditAccountScreen = () => {
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );
  const [newName, setNewName] = useState("");
  const [image, setImage] = useState("");
  const [newDescription, setNewDescription] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <Divider style={{ marginTop: 3 }} />
        <Divider style={{ marginTop: 3 }} />
        {/* User current avatar */}
        <View style={{ alignSelf: "center" }}>
          {image === "" ? (
            <ImageCache
              uri={user.profilePictureURL}
              height={90}
              width={90}
              marginTop={30}
              borderRadius={99}
              imageType="User profile picture from Edit Account Screen"
            />
          ) : (
            <Image
              source={{ uri: image }}
              style={{ height: 90, width: 90, marginTop: 30, borderRadius: 99 }}
            />
          )}
        </View>

        {/* Edit photo button */}
        <EditPhotoButton setImage={setImage} />
        {/* Divider */}
        <Divider style={{ marginTop: 15 }} />
        {/* name input */}
        <NameInput value={newName} onChangeText={setNewName} />
        {/* Description input */}
        <UserDescriptionInput
          value={newDescription}
          onChangeText={setNewDescription}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditAccountScreen;
