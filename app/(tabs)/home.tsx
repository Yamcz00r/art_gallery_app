import { ScrollView, SafeAreaView, ActivityIndicator } from "react-native";
import Explore from "../../components/explore/explore_container/Explore";
import useFetch from "../api/useFetch";
export default function Home() {
  const { results, isError, isLoading } = useFetch("artworks");


  return (
    <SafeAreaView style={{ backgroundColor: "#111827", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#FFF" />
        ) : (
          <Explore items={results} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
