import React from 'react'
import { IconProps } from './home-icon';
import Svg, { Path } from 'react-native-svg'
import { useTheme } from '@/src/features/theme/theme-hooks';

export default function LeftArrowIcon({ color }: IconProps): React.ReactElement {

    const theme = useTheme(state => state.theme)
    
    return (
        <Svg
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
            color={color || theme.text}
            style={{ marginLeft: -5 }}
        >
            <Path
                d="M29.375 13.7084L19.5833 23.5L29.375 33.2917"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}