import { View, Image, Animated } from "react-native";
import React, { useState } from "react";
import { InstagramPostProps } from "./InstagramPost";
import ImageCache from "../../Controllers/ImageCache";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";
//@ts-ignore
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const PostContent = ({ imageContent }: InstagramPostProps) => {
  const [likePlaceholder, setLikePlaceholder] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const tap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      setLikePlaceholder(true);
      fadeAnim.setValue(0);

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            setLikePlaceholder(false);
          });
        }, 350);
      });
    });

  const LikePlaceholder = () => {
    const iconSize = 130;
    const imageCacheSize = 375;
    const iconPosition = (imageCacheSize - iconSize) / 2;

    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
          position: "absolute",
          top: iconPosition,
          left: iconPosition,
        }}
      >
        <MaterialCommunityIcons name="heart" size={iconSize} color="white" />
      </Animated.View>
    );
  };

  return (
    <GestureDetector gesture={tap}>
      <View>
        <ImageCache
          //@ts-ignore
          uri={imageContent}
          height={375}
          width={375}
          imageType="Images from UserProfilePosts screen"
        />
        {likePlaceholder && <LikePlaceholder />}
      </View>
    </GestureDetector>
  );
};

export default PostContent;
