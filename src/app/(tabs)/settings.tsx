import { ScreenWrapper } from '@/src/components/ui/screen-wrapper';
import ContentsWrapper from '@/src/components/ui/contents-wrapper';
import HeaderWrapper from '@/src/components/header-wrapper';
import { H2 } from '@/src/components/ui/elements';

export default function Settings() {

  return (
    <ScreenWrapper>
      <HeaderWrapper>
        <H2>Settings</H2>
      </HeaderWrapper>
      <ContentsWrapper>
      </ContentsWrapper>
    </ScreenWrapper>
  )
}