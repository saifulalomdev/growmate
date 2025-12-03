import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import Input from './input'
import Textarea from './textarea'
import { useTheme } from '../store/use-theme'

export default function TaskForm() {
    const theme = useTheme(state => state.theme)

    return (
        <KeyboardAvoidingView
            style={styles.flex}
            behavior={Platform.OS === 'ios' ? 'padding' : "height"} // 'padding' works best on iOS
        >
            <ScrollView
                contentContainerStyle={[styles.container, { backgroundColor: theme.surface }]}
            >
                <Input label='Task' autoFocus={true} style={styles.input} />
                <Textarea multiline={true} label='Description' style={styles.input} />
                <Input label='Date' style={styles.input} />
                <Input label='Time' style={styles.input} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    container: {
        padding: 30,
        flexGrow: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    input: {
        marginBottom: 15 // replaces 'gap'
    }
})
