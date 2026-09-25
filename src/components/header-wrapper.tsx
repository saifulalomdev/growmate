import { View } from 'react-native';
import { ReactNode } from 'react';

export default function HeaderWrapper({ children }: { children: ReactNode }) {
  return (
    <View className="flex-row items-center justify-between h-[60px] px-5 gap-1.25">
      {children}
    </View>
  );
}