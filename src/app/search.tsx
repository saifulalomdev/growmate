import { ScreenWrapper } from '@/src/components/ui/screen-wrapper';
import HeaderWrapper from '@/src/components/header-wrapper';
import IconWrapper from '@/src/components/ui/icon-wrapper';
import { ArrowLeftIcon } from 'lucide-react-native';
import { TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function Search() {
    const { back } = useRouter()
    return (
        <ScreenWrapper>
            <HeaderWrapper>
                <IconWrapper onPress={() => back()}>
                    <ArrowLeftIcon />
                </IconWrapper>
                <TextInput
                    autoFocus={true}
                    placeholder='Search ...'
                    multiline={false}
                    style={{
                        paddingHorizontal: 16,
                        borderRadius: 24,
                        flex: 1,
                        height: 45,
                        fontFamily: "space-grotesk-bold"
                    }}
                />
            </HeaderWrapper>
        </ScreenWrapper>
    )
}