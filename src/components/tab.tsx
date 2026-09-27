import { Pressable, Text } from 'react-native';
import { tabIcons } from '@/src/constants/tab-icons';
import { cn } from '@/src/utils/cn';

interface TabProps {
  isFocusd: boolean;
  routeName: string;
  onPress: () => void;
}

export default function Tab({ isFocusd, onPress, routeName }: TabProps) {
  const { Icon, label } = tabIcons[routeName];

  return (
    <Pressable
      onPress={onPress}
      className={cn(
        'w-[60px] h-[60px] items-center justify-center pt-3 pb-4 border-t-2',
        isFocusd ? 'border-foreground' : 'border-transparent'
      )}
    >
      <Icon className={isFocusd ? 'text-foreground' : 'text-muted'} size={20} />
      <Text
        className={cn(
          'text-xs font-medium mt-1',
          isFocusd ? 'text-foreground font-semibold' : 'text-muted'
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
}