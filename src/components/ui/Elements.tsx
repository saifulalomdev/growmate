import { Text, TextProps } from 'react-native'
import React, { ReactElement } from 'react'
import { useTheme } from '@/src/features/theme/theme-hooks'

export function H1({ children, style, ...Props }: TextProps): ReactElement {

    const theme = useTheme(state => state.theme);

    return (
        <Text {...Props} style={[{ fontSize: 40, fontFamily: "space-grotesk-bold", color: theme.text }, style]}>
            {children}
        </Text >
    )
}

export function H2({ children, style, ...Props }: TextProps): ReactElement {

    const theme = useTheme(state => state.theme);

    return (
        <Text {...Props} style={[{ fontSize: 26, fontFamily: "space-grotesk-bold", color: theme.text }, style]}>
            {children}
        </Text >
    )
}

export function P({ children , style, ...Props }: TextProps): ReactElement {

    const theme = useTheme(state => state.theme);

    return (
        <Text {...Props} style={[{ fontSize: 16, fontFamily: "poppins-regular", color: theme.text }, style]}>
            {children}
        </Text >
    )
}
