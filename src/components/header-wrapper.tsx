import { View, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { useTheme } from '@/src/features/theme/theme-hooks'

export default function HeaderWrapper({ children }: { children: ReactNode }) {

    const theme = useTheme(state => state.theme);

    return (
        <View style={[styles.header, { backgroundColor: theme.surface, }]}>
            {children}
        </View>

    )
}

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 60,
        gap: 5
    },
})