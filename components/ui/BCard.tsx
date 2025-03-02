import type { TCard } from "@/constants/Cards";
import type { ViewProps } from "react-native";
import type { SpringConfig } from "react-native-reanimated/lib/typescript/animation/springUtils";

import * as Haptics from "expo-haptics";
import { useEffect, useRef, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  clamp,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const tooltipDisplayDelay = 300;
const selectedTranslation = -15;
const defaultCardScale = 10;
const maxCardScale = 12;

const defaultSpring = {
  damping: 35,
  mass: 1,
  reduceMotion: ReduceMotion.System,
  restDisplacementThreshold: 0.25,
  restSpeedThreshold: 10,
  stiffness: 700,
} as const satisfies SpringConfig;

const cardSelectSpring = {
  damping: 50,
  mass: 1,
  reduceMotion: ReduceMotion.System,
  restDisplacementThreshold: 0.25,
  restSpeedThreshold: 10,
  stiffness: 1500,
} as const satisfies SpringConfig;

interface Props extends ViewProps {
  card?: TCard;
  isSelected?: boolean;
  onClick: () => void;
}

export default function BCard({ card, isSelected, onClick, style, ...rest }: Props) {
  // Origin of the finger when pan gesture begins
  const originX = useSharedValue(0);
  const originY = useSharedValue(0);
  // Current translation of the card
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const scale = useSharedValue(defaultCardScale);
  const rotateZ = useSharedValue(0);
  const panning = useSharedValue(false);

  const panStart = useRef(Date.now());
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    translationY.value = withSpring(isSelected ? selectedTranslation : 0, cardSelectSpring);
  }, [translationY, isSelected]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: translationX.value },
      { translateY: translationY.value },
      { rotateZ: `${rotateZ.value}deg` },
      { scale: scale.value / defaultCardScale },
    ],
    zIndex: panning.value ? 1 : 0,
  }));

  const tapGesture = Gesture.Tap()
    .maxDuration(tooltipDisplayDelay / 2)
    .onStart(() => onClick())
    .runOnJS(true);

  const longPressGesture = Gesture.LongPress()
    .minDuration(tooltipDisplayDelay)
    .onBegin(() => {
      scale.value = withSpring(maxCardScale, cardSelectSpring);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    })
    .onStart(() => {
      !showTooltip && setShowTooltip(true);
      rotateZ.value = withSequence(
        withTiming(5, { duration: 20 }),
        withTiming(-5, { duration: 20 }),
        withTiming(0, { duration: 20 })
      );
      scale.value = withSequence(
        withSpring(maxCardScale * 1.1, cardSelectSpring),
        withSpring(maxCardScale, cardSelectSpring)
      );
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    })
    .onFinalize(() => {
      scale.value = withSpring(defaultCardScale, defaultSpring);
      setShowTooltip(false);
    })
    .runOnJS(true);

  const panGesture = Gesture.Pan()
    .minDistance(1)
    .onBegin((e) => {
      originX.value = e.absoluteX;
      originY.value = e.absoluteY;
    })
    .onStart(() => {
      panStart.current = Date.now();
      panning.value = true;
    })
    .onUpdate((e) => {
      translationX.value = withSpring(e.absoluteX - originX.value, defaultSpring);
      translationY.value = withSpring(e.absoluteY - originY.value, defaultSpring);
      rotateZ.value = withSpring(clamp(e.velocityX / 25, -70, 70), defaultSpring);
      scale.value = withSpring(maxCardScale, defaultSpring);
      if (!showTooltip && Date.now() - panStart.current >= tooltipDisplayDelay) {
        setShowTooltip(true);
      }
    })
    .onEnd(() => {
      translationX.value = withSpring(0, defaultSpring);
      translationY.value = withSpring(isSelected ? selectedTranslation : 0, defaultSpring);
      rotateZ.value = withSpring(0, defaultSpring);
      scale.value = withSpring(defaultCardScale, defaultSpring);
      showTooltip && setShowTooltip(false);
      panning.value = false;
    })
    .runOnJS(true);

  // These operations are expensive. I should reduce to one gesture if possible
  const longPressAndPan = Gesture.Simultaneous(longPressGesture, panGesture);
  const composedGesture = Gesture.Exclusive(tapGesture, longPressAndPan);

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View
        style={[
          styles.card,
          animatedStyles,
          // showTooltip && { backgroundColor: Colors.green },
          style,
        ]}
        {...rest}
      >
        <Image source={card?.image} style={styles.card} />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  card: {
    aspectRatio: 3 / 4,
    borderRadius: 4,
    height: 80,
  },
});
