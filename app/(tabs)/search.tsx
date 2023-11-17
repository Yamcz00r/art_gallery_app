import {
  ScrollView,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import { useState } from "react";
import Explore from "../../components/explore/explore_container/Explore";
import useFetchByQuery from "../../hooks/useFetchByQuery";

export default function Home() {
  const [query, setQuery] = useState("");
  const { results, isLoading, isError } = useFetchByQuery(query);

  return (
    <SafeAreaView style={{ backgroundColor: "#111827", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Search by keyword, artist"
            placeholderTextColor="#d1d5db"
            onSubmitEditing={(e) => {
              setQuery(e.nativeEvent.text)
            }}
          />
          {isError ? (
            <Text style={styles.errorMessage}>
              Sorry, we couldn't find the resources!
            </Text>
          ) : (
            <Explore screen="search" isLoading={isLoading} items={results} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    fontFamily: "Poppins-Regular",
    borderWidth: 1,
    borderColor: "#FFF",
    fontSize: 15,
    padding: 10,
    borderRadius: 5,
    color: "#FFF",
    marginVertical: 10,
  },
  errorMessage: {
    fontSize: 25,
    textAlign: "center",
    color: "#dc2626",
    fontFamily: "Poppins-Bold",
  },
});
