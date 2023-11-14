import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { fetchArtworkById } from "../api/api";
import Header from "../../components/details/header/Header";
export default function ArtworkDetails() {
  const { id } = useGlobalSearchParams();
  const { data, status, error } = useQuery({
    queryFn: () => fetchArtworkById(Number(id)),
    queryKey: ["artwork"],
  });
  
  const item = data?.data;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111327" }}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {status == "pending" ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <ActivityIndicator size="large" color="#FFF" />
          </View>
        ) : error ? (
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              color: "#dc2626",
              fontFamily: "Poppins-Bold",
            }}
          >
            {error.message}
          </Text>
        ) : (
          <Header
            artist_title={item?.artist_title}
            date_display={item?.date_display}
            date_end={item?.date_end}
            date_start={item?.date_start}
            image_id={item?.image_id}
            place_of_origin={item?.place_of_origin}
            title={item?.title}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
