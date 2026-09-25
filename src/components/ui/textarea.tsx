import { View, StyleSheet, TextInputProps } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useTheme } from '@/src/features/theme/theme-hooks'
import { P } from './Elements';

export default function Textarea({ label, autoFocus, style, ...props }: InputProps) {

    const [isFocused, setIsFocused] = useState(false);
    const theme = useTheme(state => state.theme);

    return (
        <View style={[styles.container, {
            borderColor: isFocused ? theme.secondary : "transparent",
        }]}>

            <TextInput
                {...props}
                autoFocus={autoFocus}
                style={[styles.input, style,
                {
                    backgroundColor: theme.background,
                    color: theme.text,
                }]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <P style={[styles.label, { backgroundColor: theme.background }]}>
                {label}
            </P>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 120,
        borderWidth: 3,
        borderRadius: 24,
        marginTop: 10,
    },
    label: {
        position: "absolute",
        left: 20,
        top: -12,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 12
    },
    input: {
        textAlignVertical: 'top',
        paddingHorizontal: 16,
        borderRadius: 24,
        height: 120,
        flex: 1,
        fontFamily: "space-grotesk-bold",
    }
})


interface InputProps extends TextInputProps {
    label?: string
}