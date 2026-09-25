import { Text, TextProps } from 'react-native';
import { ReactElement } from 'react';
import { cn } from '@/src/utils/cn';

export function H1({ children, className, style, ...props }: TextProps): ReactElement {
  return (
    <Text
      {...props}
      style={[{ fontSize: 40, fontFamily: 'space-grotesk-bold' }, style]}
      className={cn('text-foreground', className)}
    >
      {children}
    </Text>
  );
}

export function H2({ children, className, style, ...props }: TextProps): ReactElement {
  return (
    <Text
      {...props}
      style={[{ fontSize: 26, fontFamily: 'space-grotesk-bold' }, style]}
      className={cn('text-foreground', className)}
    >
      {children}
    </Text>
  );
}

export function P({ children, className, style, ...props }: TextProps): ReactElement {
  return (
    <Text
      {...props}
      style={[{ fontSize: 16, fontFamily: 'poppins-regular' }, style]}
      className={cn('text-foreground', className)}
    >
      {children}
    </Text>
  );
}