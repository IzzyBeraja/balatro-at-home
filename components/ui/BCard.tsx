import type { TCard } from "@/constants/Cards";
import type { ViewProps } from "react-native";
import type { SpringConfig } from "react-native-reanimated/lib/typescript/animation/springUtils";

import { Colors } from "@/constants/Colors";

import { useRef, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const tooltipDisplayDelay = 300;

const springiness: SpringConfig = {
  damping: 35,
  mass: 1,
  reduceMotion: ReduceMotion.System,
  restDisplacementThreshold: 0.25,
  restSpeedThreshold: 10,
  stiffness: 700,
};

interface Props extends ViewProps {
  card?: TCard;
  isSelected?: boolean;
  onClick: () => void;
}

export default function BCard({ card, isSelected, onClick, style, ...rest }: Props) {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const panStart = useRef(Date.now());
  const [showTooltip, setShowTooltip] = useState(false);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translationX.value }, { translateY: translationY.value }],
  }));

  const tapGesture = Gesture.Tap()
    .maxDuration(tooltipDisplayDelay)
    .onStart(() => onClick())
    .runOnJS(true);

  const longPressGesture = Gesture.LongPress()
    .minDuration(tooltipDisplayDelay)
    .onStart(() => {
      !showTooltip && setShowTooltip(true);
    })
    .runOnJS(true);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      panStart.current = Date.now();
    })
    .onUpdate((e) => {
      translationX.value = e.translationX;
      translationY.value = e.translationY;
      if (!showTooltip && Date.now() - panStart.current >= tooltipDisplayDelay) {
        setShowTooltip(true);
      }
    })
    .onEnd(() => {
      translationX.value = withSpring(0, springiness);
      translationY.value = withSpring(0, springiness);
      showTooltip && setShowTooltip(false);
    })
    .runOnJS(true);

  const longPressAndPan = Gesture.Simultaneous(longPressGesture, panGesture);
  const composedGesture = Gesture.Exclusive(tapGesture, longPressAndPan);

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View
        style={[
          styles.card,
          animatedStyles,
          showTooltip && { backgroundColor: Colors.green },
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
    backgroundColor: "white",
    borderRadius: 4,
    height: 80,
  },
});
