import { View, StyleSheet } from 'react-native'
import React from 'react'
import OverviewCard from './overview-card'
import { useTheme } from '@/src/features/theme/theme-hooks'
import UsersIcon from '@/assets/icons/users-icon'
import UserTickMarkIcon from '@/assets/icons/user-tick-mark-icon'
import UserSoundIcon from '@/assets/icons/user-sound-icon'

export default function ClientsOverview() {
    const theme = useTheme(state => state.theme)
    return (
        <View style={[styles.container]}>
            <OverviewCard
                clients={300}
                backgroundColor={theme.secondary}
                Icon={UsersIcon}
                title='Total'
            />
            <View style={styles.innerContainer}>
                <OverviewCard
                    clients={3000}
                    Icon={UserSoundIcon}
                    title='Reached'
                    backgroundColor={theme.primary}
                />
                <OverviewCard
                    clients={3000}
                    Icon={UserTickMarkIcon}
                    title='Converted'
                    backgroundColor={theme.card}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 6,
        overflow: "hidden"
    },
    innerContainer: {
        flexDirection: "column",
        gap: 6,
        overflow: "hidden",
        width: "50%"
    }
})