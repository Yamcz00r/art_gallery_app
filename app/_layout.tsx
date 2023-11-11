

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback } from "react";
import { preventAutoHideAsync, hideAsync, hide } from "expo-splash-screen";

preventAutoHideAsync();

const StackLayout = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
        await hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack onLayout={onLayoutRootView}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
export default StackLayout;
