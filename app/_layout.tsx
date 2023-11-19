import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { Stack } from "expo-router";
import { useCallback } from "react";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import FavoritesContextProvider from "../context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";

preventAutoHideAsync();

const StackLayout = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });
  const router = useRouter();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <FavoritesContextProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#111327",
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "Poppins-Bold",
            color: "#FFF",
          },
          headerTitleAlign: "center",
        }}
        onLayout={onLayoutRootView}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="artwork/[id]"
          options={{
            headerTitle: `Details`,
            headerLeft: (props) => (
              <Ionicons.Button
                name="arrow-back-outline"
                backgroundColor="#111327"
                color="#FFF"
                size={25}
                onPress={() => router.push('/(tabs)/home')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="artist/[id]"
          options={{
            headerTitle: `Details`,
            headerLeft: (props) => (
              <Ionicons.Button
                name="arrow-back-outline"
                backgroundColor="#111327"
                color="#FFF"
                size={25}
                onPress={() => router.back()}
              />
            ),
          }}
        />
        <Stack.Screen
          name="media/[image_id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </FavoritesContextProvider>
  );
};
export default StackLayout;
