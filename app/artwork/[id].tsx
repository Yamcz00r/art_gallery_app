import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from "react-native";
import { useGlobalSearchParams } from "expo-router";
import useFetchSingle from "../api/useFetchSingle";
import Header from "../../components/details/header/Header";
import DetailsBody from "../../components/details/body/Body";
import Footer from "../../components/details/footer/Footer";
export default function ArtworkDetails() {
  const { id } = useGlobalSearchParams();
  const { result, isError, isLoading } = useFetchSingle(`artworks/${Number(id)}`)

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
            <Header
              artist_title={result?.artist_title}
              date_display={result?.date_display}
              date_end={result?.date_end}
              date_start={result?.date_start}
              image_id={result?.image_id}
              place_of_origin={result?.place_of_origin}
              title={result?.title}
            />
            <DetailsBody
              artist_title={result?.artist_title}
              description={result?.description}
              dimensions={result?.dimensions}
              credit_line={result?.credit_line}
              date_end={result?.date_end}
              date_start={result?.date_start}
              place_of_origin={result?.place_of_origin}
              artist_id={result?.artist_id}
              medium_display={result?.medium_display}
              artwork_type_title={result?.artwork_type_title}
              departament_title={result?.department_title}
            />
            <Footer id={result?.id}/>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
