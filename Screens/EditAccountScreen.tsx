import { View, Text } from "react-native";
import React, { useState } from "react";
import { Avatar, Divider } from "@ui-kitten/components";
import { useSelector } from "react-redux";
import EditPhotoButton from "../Components/EditAccountScreenComponents/EditPhotoButton";
import NameInput from "../Components/EditAccountScreenComponents/NameInput";
import UsernameInput from "../Components/EditAccountScreenComponents/UsernameInput";
import UserDescriptionInput from "../Components/EditAccountScreenComponents/UserDescriptionInput";

const EditAccountScreen = () => {
  const user = useSelector(
    //@ts-expect-error
    (state) => state.User.user
  );
  const [newName, setNewName] = useState("");
  const [image, setImage] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Divider style={{ marginTop: 3 }} />
      <Divider style={{ marginTop: 3 }} />
      {/* User current avatar */}

      <Avatar
        source={{ uri: user.profilePictureURL }}
        style={{ height: 90, width: 90, alignSelf: "center", marginTop: 30 }}
      />
      {/* Edit photo button */}
      <EditPhotoButton />
      {/* Divider */}
      <Divider style={{ marginTop: 15 }} />
      {/* name input */}
      <NameInput />
      {/* Username input */}
      <UsernameInput />
      {/* Description input */}
      <UserDescriptionInput />
    </View>
  );
};

export default EditAccountScreen;
