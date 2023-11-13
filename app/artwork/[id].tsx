import { SafeAreaView, ScrollView } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { fetchArtworkById } from "../api/api";
import Header from "../../components/details/header/Header";
export default function ArtworkDetails() {
  const { id } = useGlobalSearchParams();
  const { data, status, error } = useQuery({
    queryFn: () => fetchArtworkById(Number(id)),
    queryKey: ["artworks"],
  });

  const item = data?.data;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111327" }}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Header
          artist_title={item?.artist_title}
          date_display={item?.date_display}
          date_end={item?.date_end}
          date_start={item?.date_start}
          image_id={item?.image_id}
          place_of_origin={item?.place_of_origin}
          title={item?.title}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
