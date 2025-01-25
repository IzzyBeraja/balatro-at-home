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
  style?: StyleProp<ViewStyle>;
};

export default function BButton({
  style,
  children,
  onPress,
  textStyle,
  defaultColor = Colors.defaultButtonBackground,
  pressedColor = Colors.default2ButtonBackground,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonBase,
        { backgroundColor: pressed ? pressedColor : defaultColor },
        style,
      ]}
    >
      <Text selectable={false} style={[styles.text, textStyle]}>
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
  },
  text: {
    color: "white",
  },
});
