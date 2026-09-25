import LeftArrowIcon from '@/assets/icons/left-arrow-icon'
import { ScreenWrapper } from '@/src/components/ui/screen-wrapper'
import HeaderWrapper from '@/src/components/header-wrapper'
import IconWrapper from '@/src/components/ui/icon-wrapper'
import { useTheme } from '@/src/features/theme/theme-hooks'
import { TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import React from 'react'

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