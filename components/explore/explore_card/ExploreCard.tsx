import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { ExploreArtworkItem } from "../../../types/fetch";
import styles from "./ExploreCard.style";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState, useContext } from "react";
import { FavoritesContext, FavoritesContextType } from "../../../context/FavoritesContext";
interface ExploreCardProps {
  item: ExploreArtworkItem;
  itemId: number | undefined
}

export default function ExploreCard({ item, itemId }: ExploreCardProps) {
  const { saveArtwork, getFavoriteArtwork, removeArtwork }: FavoritesContextType = useContext(FavoritesContext);
  const router = useRouter();
  const artwork = getFavoriteArtwork(item?.id);

  const handlePress = () => {
    router.replace(`/artwork/${item.id}`);
  };

  const handleHeartPress = () => {
    if (artwork) {
      removeArtwork(item?.id);
      return;
    }
    saveArtwork(item);
  };
  
  return (
    <View key={item.id} style={styles.card_container}>
      <Pressable onPress={handlePress}>
        <Image
          source={`${
            item.image_id === null
              ? "https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg"
              : `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
          }`}
          style={styles.card_image}
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
        onPress={() => handleHeartPress()}
      >
        <FontAwesome
          name={artwork === item.id ? "heart" : "heart-o"}
          size={25}
          color="#dc2626"
        />
      </TouchableOpacity>
    </View>
  );
}
