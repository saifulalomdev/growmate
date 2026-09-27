import { ScreenWrapper } from '@/src/components/ui/screen-wrapper'
import { CloudUpload, SearchIcon } from 'lucide-react-native'
import HeaderWrapper from '@/src/components/header-wrapper';
import IconWrapper from '@/src/components/ui/icon-wrapper';
import { H2 } from '@/src/components/ui/elements';
import { Text, View } from 'react-native'

export default function Index() {

  return (
    <ScreenWrapper>
      <HeaderWrapper>
        <H2>Overview</H2>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <IconWrapper>
            <SearchIcon/>
          </IconWrapper>
          <IconWrapper>
            <CloudUpload/>
          </IconWrapper>
        </View>
      </HeaderWrapper>

      <Text className='text-foreground text-4xl p-6 uppercase'>
        this is comin form expo app styled with native wind
      </Text>

    </ScreenWrapper>
  )
}