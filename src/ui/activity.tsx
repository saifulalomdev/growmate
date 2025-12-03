import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useTheme } from '../store/use-theme'
import { H2, P } from './Elements'
import IconWrapper from './icon-wrapper'
import NoteIcon from '@/assets/icons/note-icon'
import TickMarkIcon from '@/assets/icons/tick-mark-icon'

export default function Activity() {

    const theme = useTheme(state => state.theme);
    const tasks: number = 30;
    const taskStatus: string = "NO TASKS LEFT"

    return (
        <View style={[styles.container, { backgroundColor: theme.accents }]}>
            <View style={[styles.innerContainer, { justifyContent: "space-between" }]}>
                <View style={[styles.innerContainer]}>
                    <IconWrapper isFeedback={false}>
                        <NoteIcon color={theme.foreground} />
                    </IconWrapper>
                    <P style={{ fontWeight: "bold" }}>Tasks</P>
                </View>
                <P style={{ fontWeight: "bold" }}>
                    {tasks}  {tasks === 1 ? "task" : "tasks"} completed
                </P>
            </View>

            {/* <P style={{ textAlign: "center", color: theme.muted }}>You have no task today</P> */}
            <ScrollView horizontal contentContainerStyle={styles.strikesContainer}>


                {tasks > 0 && Array.from({ length: tasks }).map((_, i) => (
                    <IconWrapper isFeedback={false} key={i}>
                        {
                            i % 2 === 0 ?
                                <TickMarkIcon color={theme.text} /> :
                                <H2>{i + 1}</H2>
                        }
                    </IconWrapper>
                ))}
                {tasks === 0 && taskStatus.split("").map((letter, i) => (
                    <IconWrapper isFeedback={false} key={i}>
                        <H2>{letter}</H2>
                    </IconWrapper>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 142,
        borderRadius: 24,
        padding: 16,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    innerContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    strikesContainer: {
        flexDirection: "row",
        gap: 8,
        marginTop: 16
    }
})