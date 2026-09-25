import { TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@/src/features/theme/theme-hooks';
import { tabIcons } from '@/src/constants/tab-icons';
import { Text } from 'react-native'

export default function Tab({ isFocusd, onPress, routeName }: TabProps) {

    const theme = useTheme(state => state.theme);
    const backgroundColor = isFocusd ? theme.text : "transparent";
    const iconColor = isFocusd ? theme.foreground : theme.muted;

    // access icon properties from tabicons object 
    // with routename as key
    const { Icon, label } = tabIcons[routeName]

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.tab, { borderColor: backgroundColor }]}
        >
            <Icon color={iconColor} />
            <Text style={{ color: iconColor, fontSize: 12 }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tab: {
        width: 60,
        height: 60,
        borderTopWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom : 16,
        paddingTop : 12,
    }
})

interface TabProps {
    isFocusd: boolean,
    routeName: string,
    onPress: () => void,

}