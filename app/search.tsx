import { TextInput } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/src/ui/screen-wrapper'
import HeaderWrapper from '@/src/ui/header-wrapper'
import IconWrapper from '@/src/ui/icon-wrapper'
import LeftArrowIcon from '@/assets/icons/left-arrow-icon'
import { useRouter } from 'expo-router'
import { useTheme } from '@/src/store/use-theme'

export default function Search() {
    const theme = useTheme(state => state.theme)
    const { back } = useRouter()
    return (
        <ScreenWrapper>
            <HeaderWrapper>
                <IconWrapper onPress={() => back()}>
                    <LeftArrowIcon />
                </IconWrapper>
                <TextInput
                    selectionColor={theme.primary}
                    autoFocus={true}
                    placeholder='Search ...'
                    placeholderTextColor={theme.muted}
                    multiline={false}
                    style={{
                        paddingHorizontal: 16,
                        borderRadius: 24,
                        backgroundColor: theme.background,
                        flex: 1,
                        color: theme.text,
                        height: 45,
                        fontFamily: "space-grotesk-bold"
                    }}
                />
            </HeaderWrapper>
        </ScreenWrapper>
    )
}