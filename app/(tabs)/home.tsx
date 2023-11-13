import {
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchArtworks } from "../api/api";
import Explore from "../../components/explore/explore_container/Explore";

export default function Home() {
  const { data } = useQuery({ queryFn: () => fetchArtworks(), queryKey: [] })
   
  
  
  return (
    <SafeAreaView style={{ backgroundColor: "#111827", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Explore items={data?.data}/>
      </ScrollView>
    </SafeAreaView>
  );
}
