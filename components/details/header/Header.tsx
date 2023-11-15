import { useState } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { Image } from "expo-image";
import styles from "./Header.style";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
interface HeaderProps {
  image_id?: string;
  title?: string;
  artist_title?: string;
  place_of_origin?: string;
  date_start?: number;
  date_end?: number;
  date_display?: string;
}

const { width, height } = Dimensions.get("window");

export default function Header(props: HeaderProps) {
  // const [isVisible, setIsVisible] = useState(false);

  // const handleClose = () => {
  //   setIsVisible(false)
  // }
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);


  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
      console.log(e.focalY)
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    })
    .onFinalize(() => {
      scale.value = 1
    })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}]
  }))
 

  //TODO: IMPLEMENT ZOOMING FUNCTIONALITY
  return (
    <View style={{ padding: 5 }}>
      {/* <PinchableImage handleClose={handleClose} isVisible={isVisible} imageUrl={`https://www.artic.edu/iiif/2/${props.image_id}/full/843,/0/default.jpg`}/> */}
      <View style={styles.banner_container}>
        {/* <Pressable onPress={() => setIsVisible(true)}> */}
        <GestureDetector gesture={pinchGesture}>
          <Animated.Image
            style={[{
              width: width * 0.9,
              height: height * 0.4,
              resizeMode: "contain",
              borderRadius: 10,
              zIndex: 10
            }, animatedStyle]}
            source={{
              uri: props.image_id === null
                ? "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
                : `https://www.artic.edu/iiif/2/${props.image_id}/full/843,/0/default.jpg`
            }}
          />
        </GestureDetector>

        {/* </Pressable> */}
      </View>
      <View style={styles.credits_container}>
        <Text style={styles.title_display}>{props.title}</Text>
        <Text style={styles.date_display}>{props.date_display}</Text>
        <Text style={styles.artist_display}>
          {`${props.artist_title} ${
            props.place_of_origin === null ? "" : ", " + props.place_of_origin
          }`}
        </Text>
      </View>
    </View>
  );
}
