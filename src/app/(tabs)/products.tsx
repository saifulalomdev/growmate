import { ScreenWrapper } from '@/src/components/ui/screen-wrapper'
import HeaderWrapper from '@/src/components/header-wrapper'
import IconWrapper from '@/src/components/ui/icon-wrapper'
import { H2 } from '@/src/components/ui/elements'
import { PlusIcon } from 'lucide-react-native'
import { useTheme } from '@/src/features/theme/theme-hooks'

export default function Products() {
  const { theme: { text } } = useTheme()
  return (
    <ScreenWrapper>

      {/* screen header */}
      <HeaderWrapper>
        <H2>Products</H2>
        <IconWrapper>
          <PlusIcon color={text} />
        </IconWrapper>
      </HeaderWrapper>

      {/* search bar */}
    </ScreenWrapper>
  )
}