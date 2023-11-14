import { memo } from "react";
import {  ExploreArtworkItem } from "../../../types/fetch";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import styles from "./Explore.style";
import ExploreCard from "../explore_card/ExploreCard";

interface ExploreProps {
  items?: ExploreArtworkItem[];
  isLoading: boolean;
  fetchNextPage: () => undefined;
}

const Explore = memo(({ items, isLoading, fetchNextPage }: ExploreProps) => (
  <View style={styles.container}>
    <FlatList
      data={items}
      renderItem={({ item }) => <ExploreCard item={item} />}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      initialNumToRender={100}
      ListFooterComponent={() =>
        isLoading ? (
          <View style={styles.loading_container}>
            <ActivityIndicator size="large" color="#FFF" />
            <Text style={styles.loading_text}>Loading more...</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.fetch_more_button}
            onPress={fetchNextPage}
          >
            <Text style={styles.text}>Fetch more artworks</Text>
          </TouchableOpacity>
        )
      }
    />
  </View>
));

export default Explore;
