import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
} from 'react-native-reanimated';
import { useTheme } from '../store/use-theme';
import { H2, P } from './Elements';
import { trimText } from '../utils/trim-text';
import { runOnJS } from 'react-native-worklets';

export default function TaskCard(props: TaskCardProps) {
  const theme = useTheme(state => state.theme);
  const [text, setText] = useState<string>('');
  const translateX = useSharedValue(0);

  // Foreground card animation
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  // Background card color animation
  const animatedBg = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      translateX.value,
      [-150, 0],           // swipe left
      ['red', theme.primary] // colors
    ),
  }));

  // Pan gesture
  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;

      // Dynamically change background text based on swipe distance
      if (event.translationX < -100) {
        runOnJS(setText)('Completed');
      } else {
        runOnJS(setText)('Delete');
      }
    })
    .onEnd(() => {
      // Reset foreground card
      translateX.value = withSpring(0);
      runOnJS(setText)('Completed');
    });

  return (
    // Outer container participates in ScrollView/FlatList
    <View style={{ width: '100%', height: 140 }}>
      {/* Background card */}
      <Animated.View style={[styles.cardBase, animatedBg]}>
        <View style={styles.bgContent}>
          <H2 style={{ color: 'white' }}>{text}</H2>
        </View>
      </Animated.View>

      {/* Foreground card */}
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[styles.cardBase, animatedStyle, { backgroundColor: theme.background }]}
        >
          <View>
            <H2>{trimText(props.title || "I have to do it ", 18)}</H2>
            <P style={{ color: theme.muted, fontSize: 14 }}>
              {trimText(
                props.description ||
                "Meet Meet with mina this is kind djaskl fjaklsdfj laksdjfasljdf with mina",
                80
              )}
            </P>
          </View>
          <View>
            <View style={{ width: '100%', height: 0.5, backgroundColor: theme.muted }} />
            <View style={styles.innerContainer}>
              <P style={{ fontWeight: 'bold' }}>Today:</P>
              <P style={{ color: theme.muted }}>{props.time || '10am - 10:30am'}</P>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBase: {
    position: 'absolute', // stack foreground and background
    width: '100%',
    height: '100%',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  innerContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  bgContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface TaskCardProps {
  title?: string;
  description?: string;
  data?: string;
  time?: string;
}
