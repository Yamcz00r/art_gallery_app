import { SafeAreaView, ScrollView, View, Text, ActivityIndicator } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { ArtistItem } from "../../types/fetch";
import Artist from "../../components/artist/Artist";
import useFetchSingle from "../../hooks/useFetchSingle";
export default function ArtistDetails() {
    const { id } = useGlobalSearchParams();
    const {result, isError, isLoading } = useFetchSingle<ArtistItem>(`agents/${id}`, 'artist');
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#111327" }}>
            <ScrollView showsHorizontalScrollIndicator={false}>
            {isLoading ? (
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
        ) : isError ? (
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
          <>
            <View>
                <Artist key={result?.id} artist_id={result?.id} birth_date={result?.birth_date} death_date={result?.death_date} description={result?.description} title={result?.title}/>
            </View>
          </>
        )}
            </ScrollView>
        </SafeAreaView>
    )
}