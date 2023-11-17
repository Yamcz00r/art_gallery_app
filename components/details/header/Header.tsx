import { View, Text, Dimensions, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./Header.style";

interface HeaderProps {
  image_id?: string;
  title?: string;
  artist_title?: string;
  place_of_origin?: string;
  date_start?: number;
  date_end?: number;
  date_display?: string;
  isZoomable?: boolean;
  artist_id?: number;
}

const { width, height } = Dimensions.get("window");

export default function Header(props: HeaderProps) {
  const router = useRouter();
  return (
    <View style={{ padding: 5 }}>
      <View style={styles.banner_container}>
        {props.isZoomable ? (
          <Pressable onPress={() => router.push(`/media/${props.image_id}`)}>
            <Image
              style={{
                width: width * 0.9,
                height: height * 0.4,
                resizeMode: "contain",
                borderRadius: 10,
                zIndex: 10,
              }}
              source={{
                uri:
                  props.image_id === null
                    ? "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
                    : `https://www.artic.edu/iiif/2/${props.image_id}/full/843,/0/default.jpg`,
              }}
            />
          </Pressable>
        ) : (
          <Image
            style={{
              width: width * 0.9,
              height: height * 0.4,
              resizeMode: "contain",
              borderRadius: 10,
              zIndex: 10,
            }}
            source={{
              uri:
                props.image_id === null
                  ? "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
                  : `https://www.artic.edu/iiif/2/${props.image_id}/full/843,/0/default.jpg`,
            }}
          />
        )}
      </View>
      <View style={styles.credits_container}>
        <Text style={styles.title_display}>{props.title}</Text>
        <Text style={styles.date_display}>{props.date_display}</Text>
        <Pressable
          onPress={() => {
            router.push(`/media/${props.artist_id}`);
          }}
        >
          <Text style={styles.artist_display}>
            {`${props.artist_title} ${
              props.place_of_origin === null ? "" : ", " + props.place_of_origin
            }`}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
