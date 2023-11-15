import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

interface PinchableImageProps {
  imageUrl: string;
  isVisible: boolean;
  handleClose: () => void;
}

const PinchableImage = ({
  imageUrl,
  isVisible,
  handleClose,
}: PinchableImageProps) => {
  


  const CloseButton = () => (
    <Pressable style={styles.closeContainer} onPress={handleClose}>
      <Ionicons name="close-outline" size={35} color="#FFF" />
    </Pressable>
  );

  const pinch = Gesture.Pinch()
    .onBegin((e) => {
      console.log(e)
    }) 

  return (
    <Modal
      presentationStyle="fullScreen"
      visible={isVisible}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <CloseButton />
        <GestureDetector gesture={pinch}>
            <Animated.Image
              source={{ uri: imageUrl }}
              resizeMode="contain"
              style={styles.image}
            />
        </GestureDetector>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111327",
  },
  closeContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    height: 50,
    width: 50,
    backgroundColor: "#111327",
    zIndex: 10,
  },
  image: {
    height,
    width
  },
});

export default PinchableImage;
