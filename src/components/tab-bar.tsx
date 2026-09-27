import type { BottomTabBarProps } from 'expo-router/build/react-navigation/bottom-tabs';
import { View } from 'react-native';
import Tab from './tab';

export default function TabBar({ state, navigation }: BottomTabBarProps) {
  const routes = state.routeNames;

  return (
    <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-between px-5 bg-background">
      {routes.map((routeName, i) => {
        const isFocused = state.index === i;
        
        return (
          <Tab
            key={routeName}
            onPress={() => navigation.navigate(routeName)}
            routeName={routeName}
            isFocusd={isFocused}
          />
        );
      })}
    </View>
  );
}