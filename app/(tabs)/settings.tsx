import { ScreenWrapper } from '@/src/components/ui/screen-wrapper'
import MoonIcon from '@/assets/icons/moon-icon'
import HeaderWrapper from '@/src/components/ui/header-wrapper'
import IconWrapper from '@/src/components/ui/icon-wrapper'
import { useTheme } from '@/src/features/theme/theme-hooks'
import SunIcon from '@/assets/icons/sun-icon'
import { H2 } from '@/src/components/ui/Elements'

export default function Settings() {

  const toggleTheme = useTheme(state => state.toggleTheme)
  const currentTheme = useTheme(state => state.theme.name)


  return (
    <ScreenWrapper>

      {/* screen header */}
      <HeaderWrapper>
        <H2>Settings</H2>
        <IconWrapper onPress={() => toggleTheme()}>
          {currentTheme === "dark" ? <SunIcon /> : <MoonIcon />}
        </IconWrapper>
      </HeaderWrapper>

    </ScreenWrapper>
  )
}