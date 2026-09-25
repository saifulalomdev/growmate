import React, { ReactElement } from 'react';
import { Pressable, StyleSheet, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '@/src/features/theme/theme-hooks';


export default function IconWrapper({ children, isFeedback = true, style, ...props }: IconWrapperProps) {

  const theme = useTheme(state => state.theme)
  return (
    <Pressable
      style={({ pressed }) => [
        styles.iconWrapper,
        style,
        {
          opacity: pressed && isFeedback ? 0.2 : 1,
          backgroundColor: theme.background,
        },
      ]}
      {...props}>
      {children}
    </Pressable >
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    height: 46,
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});


// Extend TouchableOpacityProps so we can pass all its props (like onPress, activeOpacity, etc.)
interface IconWrapperProps extends PressableProps {
  children?: ReactElement;
  isFeedback?: boolean;
  style?: StyleProp<ViewStyle>;

}