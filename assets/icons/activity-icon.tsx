import React from 'react'
import { IconProps } from './home-icon'
import Svg, { Path } from 'react-native-svg'
import { useTheme } from '@/src/features/theme/theme-hooks'

export default function ActivityIcon({ color }: IconProps): React.ReactElement {

  const theme = useTheme(state => state.theme)

  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color={color || theme.text}
    >
      <Path
        d="M21 12H18.038C17.828 12 17.722 12 17.633 12.042C17.5516 12.0805 17.4822 12.1403 17.432 12.215C17.371 12.303 17.34 12.42 17.277 12.655L15.46 19.501C15.227 20.376 15.111 20.814 14.936 20.927C14.8641 20.9749 14.7796 21.0002 14.6932 20.9999C14.6068 20.9995 14.5225 20.9734 14.451 20.925C14.276 20.81 14.163 20.371 13.937 19.495L10.064 4.505C9.837 3.629 9.724 3.19 9.549 3.075C9.47749 3.02655 9.39318 3.00049 9.3068 3.00013C9.22043 2.99978 9.13591 3.02514 9.064 3.073C8.889 3.186 8.773 3.623 8.54 4.499L6.723 11.344C6.66 11.58 6.629 11.697 6.569 11.784C6.51866 11.8592 6.44884 11.9194 6.367 11.958C6.278 12 6.173 12 5.962 12H3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
