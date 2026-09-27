import { ScreenWrapper } from '@/src/components/ui/screen-wrapper';
import HeaderWrapper from '@/src/components/header-wrapper';
import IconWrapper from '@/src/components/ui/icon-wrapper';
import { H2 } from '@/src/components/ui/elements';
import { PlusIcon } from 'lucide-react-native';

export default function Products() {
  return (
    <ScreenWrapper>
      <HeaderWrapper>
        <H2>Shops</H2>
        <IconWrapper>
          <PlusIcon/>
        </IconWrapper>
      </HeaderWrapper>
    </ScreenWrapper>
  )
}