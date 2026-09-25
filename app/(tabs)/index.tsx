import { ScreenWrapper } from '@/src/components/ui/screen-wrapper'
import { StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function Index() {

  const { push } = useRouter();

  return (
    <ScreenWrapper>


    </ScreenWrapper>
  )
}

const defaultScreenStyle = StyleSheet.create({
  rightIconsWrapper: {
    flexDirection: 'row',
    gap: 10,
  }
})
