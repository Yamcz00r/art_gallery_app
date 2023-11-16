import { useGlobalSearchParams } from "expo-router";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function ImageView() {
  const { image_id } = useGlobalSearchParams();
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const pinch = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale
    })
    .onEnd((e) => {
      scale.value = e.scale;
    });

  const scaleAnimated = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.imageContainer}>
      <GestureDetector gesture={pinch}>
        <Animated.Image
          style={[styles.image, scaleAnimated]}
          source={{
            uri: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
          }}
        />
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "#000",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: height / 2,
    resizeMode: "contain",
  },
});
