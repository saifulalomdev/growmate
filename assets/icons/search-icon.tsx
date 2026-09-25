import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './home-icon'
import { colors } from '@/src/theme/colors'
import { useTheme } from '@/src/features/theme/theme-hooks'

export default function SearchIcon({ color }: IconProps) {

    const theme = useTheme(state => state.theme);
    
    return (
        <Svg
            width="24"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            color={color || theme.text}
        >
            <Path
                d="M21.2524 20.9553L16.9309 16.6339M16.9309 16.6339C17.6701 15.8947 18.2565 15.0171 18.6566 14.0513C19.0566 13.0855 19.2625 12.0504 19.2625 11.005C19.2625 9.95958 19.0566 8.92443 18.6566 7.95861C18.2565 6.9928 17.6701 6.11524 16.9309 5.37604C16.1917 4.63684 15.3142 4.05047 14.3484 3.65042C13.3825 3.25037 12.3474 3.04446 11.302 3.04446C10.2566 3.04446 9.22147 3.25037 8.25566 3.65042C7.28984 4.05047 6.41228 4.63684 5.67308 5.37604C4.1802 6.86893 3.34151 8.89371 3.34151 11.005C3.34151 13.1162 4.1802 15.141 5.67308 16.6339C7.16597 18.1268 9.19075 18.9655 11.302 18.9655C13.4133 18.9655 15.438 18.1268 16.9309 16.6339Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}