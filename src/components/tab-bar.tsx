import { View, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Tab from './tab';
import { useTheme } from '@/src/features/theme/theme-hooks';

export default function TabBar({ state, navigation }: BottomTabBarProps) {

    const theme = useTheme(state => state.theme);
    const routes = state.routeNames;

    return (
        <View style={[styles.tabBar, { backgroundColor: theme.background }]}>
            {routes.map((routeName, i) => {
                const isFocused = state.index === i;
                return (
                    <Tab
                        key={i}
                        onPress={() => navigation.navigate(routeName)}
                        routeName={routeName}
                        isFocusd={isFocused}
                    />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        left: 0,
        right: 0,
        paddingHorizontal: 20,
    }
})