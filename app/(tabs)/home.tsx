import { ScrollView, SafeAreaView, ActivityIndicator } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchArtworks } from "../api/api";
import Explore from "../../components/explore/explore_container/Explore";
export default function Home() {
  const { data, status } = useQuery({
    queryFn: () => fetchArtworks(),
    queryKey: ["artworks"],
  });
  console.log(data);


  return (
    <SafeAreaView style={{ backgroundColor: "#111827", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {status === "pending" ? (
          <ActivityIndicator size="large" color="#FFF" />
        ) : (
          <Explore items={data?.data} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
