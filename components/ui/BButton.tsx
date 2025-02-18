import type {
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle} from "react-native";

import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

import {
  Pressable,
  StyleSheet,
  View
} from "react-native";

interface Props extends PressableProps {
  onPress: () => void;
  children: string;
  textStyle?: StyleProp<TextStyle>;
  selected?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function BButton({ style, children, onPress, disabled = false, textStyle }: Props) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonBase,
        pressed && { boxShadow: "none" },
        pressed && { transform: [{ translateY: 2 }, { translateX: 1 }] },
        disabled && styles.disabled,
        style,
      ]}
    >
      {({ pressed }) => (
        <>
          {pressed && <View style={[StyleSheet.absoluteFill, styles.dimmer]} />}
          <BText style={[styles.text, disabled && styles.disabledText, textStyle]}>
            {children}
          </BText>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    alignItems: "center",
    backgroundColor: Colors.red,
    borderRadius: 6,
    boxShadow: `1px 4px 0px -1px ${Colors.defaultShadowColor}`,
    justifyContent: "center",
    overflow: "hidden",
    padding: 4,
    position: "relative",
  },
  dimmer: {
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  disabled: {
    backgroundColor: Colors.defaultShadowColor,
    boxShadow: "none",
  },
  disabledText: {
    color: Colors.mainMenuBackground,
  },
  text: {
    color: "white",
  },
});
