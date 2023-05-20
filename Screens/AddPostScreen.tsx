import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { windowWidth } from "../Constants/Dimensions";
import * as ImagePicker from "expo-image-picker";
import ShareButton from "../Components/AddPostScreenComponents/ShareButton";
import { Divider } from "@ui-kitten/components";
import { useDispatch } from "react-redux";
import { SharePostSlice } from "../Redux/SharePostSlice";

const AddPostScreen = () => {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (description != "" && image != "") {
      //set redux global state information
      dispatch(SharePostSlice.actions.setShareButtonStatus(false));
      dispatch(SharePostSlice.actions.setPostDescription(description));
      dispatch(SharePostSlice.actions.setPostImage(image));
    } else {
      dispatch(SharePostSlice.actions.setShareButtonStatus(true));
      //reset the information
      dispatch(SharePostSlice.actions.resetInitialState());
    }
  }, [description, image]);

  const AddPhotoForNewPost = async () => {
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
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView>
          <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 30 }}>
            {/* Image placeholder */}
            <TouchableOpacity onPress={AddPhotoForNewPost}>
              <Image
                source={
                  image === ""
                    ? require("../assets/Images/image-placeholder.jpg")
                    : { uri: image }
                }
                style={{ height: 100, width: 100 }}
              />
            </TouchableOpacity>

            {/* Description input */}
            <TextInput
              placeholder="Write a caption..."
              value={description}
              onChangeText={(text) => setDescription(text)}
              style={{
                fontSize: 17,
                marginLeft: 10,
                flex: 1,
                flexWrap: "wrap",
                maxWidth: windowWidth / 1.9,
              }}
              maxLength={120}
            />
          </View>
          {/* Divider */}
          <Divider style={{ marginTop: 15 }} />
          {/* Share button */}
          <ShareButton setImage={setImage} setDescription={setDescription} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default AddPostScreen;
