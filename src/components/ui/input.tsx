import { View, StyleSheet, TextInputProps } from 'react-native'
import { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { P } from './elements';

export default function Input({ label, autoFocus, style, ...props }: InputProps) {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.container, {
        }]}>

            <TextInput
                {...props}
                autoFocus={autoFocus}
                style={[styles.input, style,
                {
                }]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <P style={[styles.label]}>
                {label}
            </P>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 50,
        borderWidth: 3,
        borderRadius: 24,
        marginTop : 10
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
        paddingHorizontal: 16,
        borderRadius: 24,
        flex: 1,
        height: 45,
        fontFamily: "space-grotesk-bold",
    }
})


interface InputProps extends TextInputProps {
    label?: string
}