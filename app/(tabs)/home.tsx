import { ScrollView, SafeAreaView, Text } from "react-native";
import { useState } from "react";
import Explore from "../../components/explore/explore_container/Explore";
import useFetch from "../api/useFetch";
import useInfiniteScroll from "../api/useInfiniteScroll";
export default function Home() {
  // const { results, isError, isLoading } = useFetch("artworks");
  const [pageNumber, setPageNumber] = useState(1);
  const { results, isLoading, isError, hasNextPage } = useInfiniteScroll(pageNumber);

  const fetchNextPage = () => {
    if (hasNextPage) {
      setPageNumber(prev => prev + 1)
    } 
    return undefined;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#111827", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isError ? (
          <Text style={{color: "#FFF"}}>Something went wrong</Text>
        ) : (
          <Explore items={results} isLoading={isLoading} fetchNextPage={fetchNextPage} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
