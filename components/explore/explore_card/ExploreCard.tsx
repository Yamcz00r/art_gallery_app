import { View, Text, Image, Pressable } from "react-native";
import { ArtworkItem } from "../../../types/fetch";
import styles from "./ExploreCard.style";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

interface ExploreCardProps {
  item: ArtworkItem;
}

export default function ExploreCard({ item }: ExploreCardProps) {
  const [favoriteId, setFavoriteId] = useState("");
  const router = useRouter();
  const handlePress = (id: number) => {
    router.push(`/artwork/${id}`);
  };

  const handleHeartPress = (id: number) => {
    setFavoriteId(item.id.toString());
  };

  return (
    <View style={styles.card_container}>
      <Pressable onPress={() => handlePress(item.id)}>
        <Image
          style={styles.card_image}
          source={{
            uri:
              item.image_id === null
                ? "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
                : `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
          }}
        />
        <View style={styles.description_container}>
          <Text style={styles.title_header} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.artist_header} numberOfLines={1}>
            {item.artist_title}
          </Text>
        </View>
      </Pressable>
      <TouchableOpacity
        style={styles.heart_container}
        onPress={() => handleHeartPress(item.id)}
      >
        <FontAwesome
          name={favoriteId === item.id.toString() ? "heart" : "heart-o"}
          size={25}
          color="#dc2626"
        />
      </TouchableOpacity>
    </View>
  );
}
