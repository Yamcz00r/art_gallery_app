import { useContext, useEffect } from "react";
import Explore from "../../components/explore/explore_container/Explore";
import { FavoritesContext } from "../../context/FavoritesContext";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
export default function Favorites() {
  const { favorites, readingError: isError, isLoading } = useContext(FavoritesContext);
    
  

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
            {isError}
          </Text>
        ) : (
          <Explore
            screen="search"
            items={favorites}
            isLoading={isLoading}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
