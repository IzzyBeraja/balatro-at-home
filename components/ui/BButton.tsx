import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

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
    position: "relative",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderRadius: 6,
    backgroundColor: Colors.red,
    boxShadow: `1px 4px 0px -1px ${Colors.defaultShadowColor}`,
  },
  disabled: {
    backgroundColor: Colors.defaultShadowColor,
    boxShadow: "none",
  },
  dimmer: {
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  text: {
    color: "white",
  },
  disabledText: {
    color: Colors.mainMenuBackground,
  },
});
