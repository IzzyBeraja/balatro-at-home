import {
  ColorValue,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

import { Colors } from "@/constants/Colors";

type Props = {
  onPress: () => void;
  children: string;
  textStyle?: StyleProp<TextStyle>;
  defaultColor?: ColorValue;
  pressedColor?: ColorValue;
  selected?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function BButton({
  style,
  children,
  onPress,
  disabled = false,
  textStyle,
  defaultColor = Colors.defaultButtonBackground,
  pressedColor = Colors.default2ButtonBackground,
}: Props) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonBase,
        { backgroundColor: pressed ? pressedColor : defaultColor },
        pressed && { boxShadow: "none" },
        pressed && { transform: [{ translateY: 2 }, { translateX: 1 }] },
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text selectable={false} style={[styles.text, disabled && styles.disabledText, textStyle]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    boxShadow: `1px 4px 0px -1px ${Colors.defaultShadowColor}`,
  },
  disabled: {
    backgroundColor: Colors.defaultShadowColor,
    boxShadow: "none",
  },
  text: {
    fontFamily: "Balatro",
    color: "white",
  },
  disabledText: {
    color: Colors.mainMenuBackground,
  },
});
