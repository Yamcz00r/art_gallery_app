import { ExploreArtworkItem } from "../../types/fetch";
import Explore from "../explore/explore_container/Explore";
import styles from "./Artist.style";
import { Text, View } from "react-native";
interface ArtworksListProps {
  isLoading: boolean;
  items: ExploreArtworkItem[];
}
export default function ArtworksList(props: ArtworksListProps) {
  return (
    <View style={styles.artworksContainer}>
      <Text style={styles.detailTitle}>List of artworks</Text>
      <Explore
        isLoading={props.isLoading}
        screen="search"
        items={props.items}
      />
    </View>
  );
}
