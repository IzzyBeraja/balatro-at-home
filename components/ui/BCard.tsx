import type { TCard } from "@/constants/Cards";
import type { ViewProps } from "react-native";

import { Colors } from "@/constants/Colors";

import { useRef, useState } from "react";
import { Animated, PanResponder, StyleSheet } from "react-native";

interface Props extends ViewProps {
  card?: TCard;
  isSelected?: boolean;
  onClick: () => void;
}

export default function BCard({ card, isSelected, onClick, style, ...rest }: Props) {
  const pan = useRef(new Animated.ValueXY()).current;
  const [isPanning, setPanning] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderEnd: () => setPanning(false),
      onPanResponderGrant: () => setPanning(true),
      onPanResponderMove: (e, gestureState) => {
        Animated.event([null, { dx: pan.x, dy: pan.y }], {
          useNativeDriver: false,
        })(e, gestureState);
      },
      onPanResponderRelease: (e) => {
        Animated.spring(pan, {
          friction: 20,
          tension: 500,
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  return (
    <Animated.View
      style={[
        styles.card,
        { transform: [{ translateX: pan.x }, { translateY: pan.y }] },
        isPanning && { backgroundColor: Colors.green },
        style,
      ]}
      onTouchEndCapture={() => !isPanning && onClick()}
      {...panResponder.panHandlers}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 4,
    borderWidth: 2,
    height: 90,
    width: 60,
  },
});
