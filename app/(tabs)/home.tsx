import { useEffect, useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { ScrollView, SafeAreaView, Text } from "react-native";
import { useState } from "react";
import Explore from "../../components/explore/explore_container/Explore";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const { results, isLoading, isError, hasNextPage } =
    useInfiniteScroll(pageNumber);
  const { getItems } = useContext(FavoritesContext)
  const fetchNextPage = () => {
    if (hasNextPage) {
      setPageNumber((prev) => prev + 1);
    }
    return undefined;
  };

  useEffect(() => {
    getItems()
  }, [])

  return (
    <SafeAreaView style={{ backgroundColor: "#111827", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isError ? (
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              color: "#dc2626",
              fontFamily: "Poppins-Bold",
            }}
          >
            Something went wrong
          </Text>
        ) : (
          <Explore
            screen="explore"
            items={results}
            isLoading={isLoading}
            fetchNextPage={fetchNextPage}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
