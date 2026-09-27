import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import "@/src/styles/global.css";

export default function RootLayout() {

  const [fontLoaded] = useFonts({
    "poppins-regular": require("@/assets/fonts/poppins-regular.ttf"),
    "space-grotesk-bold": require("@/assets/fonts/space-grotesk-bold.ttf"),
  }); 

  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar barStyle="dark-content" className='bg-surface'/>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView edges={["top"]} className="flex-1 bg-surface">
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="search" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaView>
      </GestureHandlerRootView>
    </>
  );
}