import React from "react";
import { View, Image, StyleSheet, Dimensions, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

interface PinchableImageProps {
  imageUrl: string;
  isVisible: boolean;
  handleClose: () => void;
}

const PinchableImage = ({ imageUrl, isVisible, handleClose }: PinchableImageProps) => {


    const CloseButton = () => (
        <Ionicons.Button name="close-outline" onPress={() => handleClose()} />
    )

    return (
        <Modal visible={isVisible} animationType="slide">
            <CloseButton />

            <View>
                <Image source={{uri: imageUrl}}/>
            </View>
        </Modal>
    )
};

export default PinchableImage;
