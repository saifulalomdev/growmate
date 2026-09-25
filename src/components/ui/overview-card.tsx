import { View, StyleSheet } from 'react-native'
import React, { ComponentType } from 'react'
import { useTheme } from '@/src/features/theme/theme-hooks'
import { H2, P } from './Elements'
import IconWrapper from './icon-wrapper'
import { IconProps } from '@/assets/icons/home-icon'

export default function OverviewCard({ title = "Title", Icon, backgroundColor, clients = 40 }: OverviewCardProps) {

    const theme = useTheme(state => state.theme)

    return (
        <View style={[styles.card, { backgroundColor: backgroundColor || theme.background }]}>
            <View style={styles.paragraphContainer}>
                <IconWrapper isFeedback={false}>
                    {Icon && <Icon color={theme.text} />}
                </IconWrapper>
                <P style={{ fontWeight: "bold" }}>{title}</P>
            </View>
            <H2>{clients / 1000 > 1 ? `${clients / 1000}k` : clients} <P>Clients</P></H2>
        </View>
    )
}


export const styles = StyleSheet.create({
    card: {
        minHeight: 140,
        borderRadius: 24,
        padding: 16,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    paragraphContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10
    }
})


interface OverviewCardProps {
    backgroundColor?: string,
    title?: string,
    Icon?: ComponentType<IconProps>;
    clients?: number
}