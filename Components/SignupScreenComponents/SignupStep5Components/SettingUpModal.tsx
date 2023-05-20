import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Card, Modal } from "@ui-kitten/components";

interface ModalProps {
  visible: boolean;
}

const SettingUpModal = ({ visible }: ModalProps) => {
  return (
    <View>
      <Modal
        visible={visible}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Card>
          <Text>Setting up your account</Text>
          <ActivityIndicator style={{ marginTop: 15 }} />
        </Card>
      </Modal>
    </View>
  );
};

export default SettingUpModal;
