import { ScreenWrapper } from '@/src/components/ui/screen-wrapper'
import HeaderWrapper from '@/src/components/header-wrapper';
import IconWrapper from '@/src/components/ui/icon-wrapper';
import { H2 } from '@/src/components/ui/elements';
import { StyleSheet, View } from 'react-native'
import { useRouter } from 'expo-router'
import { CloudUpload, SearchIcon } from 'lucide-react-native'
import { useTheme } from '@/src/features/theme/theme-hooks';

export default function Index() {

  const { push } = useRouter();
  const theme = useTheme()


  return (
    <ScreenWrapper>
      <HeaderWrapper>
        <H2>Settings</H2>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <IconWrapper>
            <SearchIcon color={theme.theme.text} />
          </IconWrapper>
          <IconWrapper>
            <CloudUpload color={theme.theme.text} />
          </IconWrapper>
        </View>
      </HeaderWrapper>


    </ScreenWrapper>
  )
}

const defaultScreenStyle = StyleSheet.create({
  rightIconsWrapper: {
    flexDirection: 'row',
    gap: 10,
  }
})
