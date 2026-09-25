import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/src/features/theme/theme-hooks";
import { StatusBar } from "react-native";
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import "@/src/styles/global.css"


export default function RootLayout() {

  const theme = useTheme(state => state.theme)
  const [fontLoaded] = useFonts({
    "poppins-regular": require("@/assets/fonts/poppins-regular.ttf"),
    "space-grotesk-bold": require("@/assets/fonts/space-grotesk-bold.ttf"),
  });

  if (!fontLoaded) return null;

  return (
    <>
      {/* */}
      <StatusBar barStyle={theme.barStyle} backgroundColor={theme.surface} />
      <GestureHandlerRootView style={{flex:1}}>
        <SafeAreaView edges={["top"]} style={{ backgroundColor: theme.surface, flex: 1 }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="search"
              options={{
                headerShown: false,
                animation: "fade",
                animationDuration: 10
              }}
            />
          </Stack>
        </SafeAreaView>
      </GestureHandlerRootView>
    </>
  );
}
