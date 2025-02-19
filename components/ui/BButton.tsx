import type { TColors } from "@/constants/Colors";
import type { PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";

import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

import { Pressable, StyleSheet, View } from "react-native";

interface Props extends PressableProps {
  onPress: () => void;
  color?: TColors;
  children: string;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function BButton({
  style,
  children,
  color = Colors.red,
  onPress,
  disabled = false,
  textStyle,
}: Props) {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles.buttonBase,
        { backgroundColor: color },
        pressed && { boxShadow: "none", transform: [{ translateY: 2 }, { translateX: 1 }] },
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
    >
      {({ pressed }) => (
        <>
          {pressed && <View style={[StyleSheet.absoluteFill, styles.dimmer]} />}
          <BText style={[disabled && styles.disabledText, textStyle]}>{children}</BText>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    alignItems: "center",
    borderRadius: 6,
    boxShadow: `1px 4px 0px -1px ${Colors.defaultShadowColor}`,
    justifyContent: "center",
    overflow: "hidden",
    padding: 4,
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
});
