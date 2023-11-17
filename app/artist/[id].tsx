import { View, Text } from "react-native";
import { useGlobalSearchParams } from "expo-router";
export default function ArtistDetails() {
    const { id } = useGlobalSearchParams();
    console.log(id)
}