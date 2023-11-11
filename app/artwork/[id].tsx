import { Text, View } from "react-native";
import { Stack } from "expo-router";
import { useGlobalSearchParams } from "expo-router";

export default function ArtworkDetails() {
  const { id } = useGlobalSearchParams();

  return (
    <View>
      <Stack.Screen options={{headerTitle: `Details ${id}`}}/>
      <Text>The detail page for artwork with id: {id}</Text>
    </View>
  );
}
