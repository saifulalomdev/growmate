import React from 'react'
import { IconProps } from './home-icon';
import Svg, { Path } from 'react-native-svg'
import { useTheme } from '@/src/features/theme/theme-hooks';

export default function SunIcon({ color }: IconProps): React.ReactElement {

    const theme = useTheme(state => state.theme)

    return (
        <Svg
            width="26"
            height="26"
            viewBox="0 0 22 22"
            fill="none"
            color={color || theme.text}
        >
            <Path
                d="M10.75 16.75C14.0637 16.75 16.75 14.0637 16.75 10.75C16.75 7.43629 14.0637 4.75 10.75 4.75C7.43629 4.75 4.75 7.43629 4.75 10.75C4.75 14.0637 7.43629 16.75 10.75 16.75Z"
                stroke="currentColor"
                strokeWidth="1"
            />
            <Path
                d="M10.75 0.75V1.75M10.75 19.75V20.75M20.75 10.75H19.75M1.75 10.75H0.75M17.82 3.68L17.428 4.073M4.072 17.428L3.679 17.821M17.82 17.82L17.428 17.427M4.072 4.072L3.679 3.679"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </Svg>
    )
}