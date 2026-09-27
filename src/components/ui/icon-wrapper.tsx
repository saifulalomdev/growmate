// src/components/ui/icon-wrapper.tsx
import { ReactElement } from 'react';
import {
  Pressable,
  StyleProp,
  ViewStyle,
  type PressableProps,
} from 'react-native';

interface IconWrapperProps extends PressableProps {
  children?: ReactElement;
  isFeedback?: boolean;
  style?: StyleProp<ViewStyle>;

}
export default function IconWrapper({ children, isFeedback = true, style, ...props }: IconWrapperProps) {
  return (
    <Pressable
      className="bg-background p-3 rounded-full items-center justify-center"
      style={({ pressed }) => [
        style,
        { opacity: pressed && isFeedback ? 0.6 : 1 },
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
}