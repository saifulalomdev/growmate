import { useTheme } from '@/src/features/theme/theme-hooks';
import { View, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

export function ScreenWrapper({ children }: { children?: ReactNode }) {

    const theme = useTheme(state => state.theme)

    return (
        <View style={[styles.container, { backgroundColor: theme.surface }]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        paddingBottom: 120,
    }
})