import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { windowWidth } from "../../Constants/Dimensions";
import { Button } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import { SignupProcessSlice } from "../../Redux/SignupProcessSlice";

interface NextButtonProps {
  placeholder: string;
  width?: number;
}

const NextButton = ({ placeholder, width }: NextButtonProps) => {
  const dispatch = useDispatch();
  const currentScreen = useSelector(
    //@ts-expect-error
    (state) => state.SignupProcess.currentScreen
  );
  return (
    <View style={{ alignSelf: "center" }}>
      <Button
        style={{
          backgroundColor: "#3797EF",
          borderWidth: 0,
          width: width ? width : windowWidth - 20,
          marginTop: 20,
        }}
        size="large"
        onPress={() => {
          if (currentScreen === 3)
            dispatch(SignupProcessSlice.actions.setCurrentScreen(5));
          else
            dispatch(
              SignupProcessSlice.actions.setCurrentScreen(currentScreen + 1)
            );
        }}
      >
        {placeholder}
      </Button>
    </View>
  );
};

export default NextButton;
