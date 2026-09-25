import { ScreenWrapper } from '@/src/components/ui/screen-wrapper'
import { CloudUpload, SearchIcon } from 'lucide-react-native'
import HeaderWrapper from '@/src/components/header-wrapper';
import { useTheme } from '@/src/features/theme/theme-hooks';
import IconWrapper from '@/src/components/ui/icon-wrapper';
import { H2 } from '@/src/components/ui/elements';
import { Text, View } from 'react-native'

export default function Index() {
  const { theme: { text } } = useTheme()

  return (
    <ScreenWrapper>
      <HeaderWrapper>
        <H2>Shops</H2>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <IconWrapper>
            <SearchIcon color={text} />
          </IconWrapper>
          <IconWrapper>
            <CloudUpload color={text} />
          </IconWrapper>
        </View>
      </HeaderWrapper>

      <Text className='text-white text-4xl p-6 uppercase'>
        this is comin form expo app styled with native wind
      </Text>

    </ScreenWrapper>
  )
}