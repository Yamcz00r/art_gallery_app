import { TouchableOpacity, Text } from "react-native";
import { useContext} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FavoritesContext } from "../../../context/FavoritesContext";
import styles from "./Footer.style";
import { ExploreArtworkItem } from "../../../types/fetch";


export default function Footer(item: ExploreArtworkItem) {
  const { getFavoriteArtwork, saveArtwork, removeArtwork } = useContext(FavoritesContext);
  const artwork = getFavoriteArtwork(item?.id)

  const handlePress = () => {
    if (!artwork) {
      saveArtwork(item);
      return;
    } 
    removeArtwork(item?.id)
  }
  return (
    <TouchableOpacity style={styles.footer_container} onPress={() => handlePress()}>
      <Text style={styles.footer_text}>{artwork ? "Already in favorites" : "Add to favorite" }</Text>
      <FontAwesome name={artwork === item.id ? "heart" : "heart-o"} color="#dc2626" size={30} />
    </TouchableOpacity>
  );
}
