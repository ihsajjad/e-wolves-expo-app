import InitialLoading from "@/components/InitialLoading";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    }, 2000); // Delay for 2 seconds

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [loaded]);

  if (!loaded) return <InitialLoading />;

  return <Slot />;
}
