import React from 'react'
import { ScreenWrapper } from '@/src/components/ui/screen-wrapper'
import PlusIcon from '@/assets/icons/plus-icon'
import HeaderWrapper from '@/src/components/ui/header-wrapper'
import IconWrapper from '@/src/components/ui/icon-wrapper'
import { H2 } from '@/src/components/ui/Elements'

export default function Clients() {
  return (
    <ScreenWrapper>

      {/* screen header */}
      <HeaderWrapper>
        <H2>Clients</H2>
        <IconWrapper>
          <PlusIcon />
        </IconWrapper>
      </HeaderWrapper>

      {/* search bar */}
    </ScreenWrapper>
  )
}