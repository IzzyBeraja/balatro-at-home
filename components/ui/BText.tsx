import type { TColors } from "@/constants/Colors";
import type { TextProps, TextStyle } from "react-native";

import { StyleSheet, Text } from "react-native";

type TextSize = "small" | "medium" | "large";

interface Props extends TextProps {
  color?: TColors;
  bold?: true;
  size?: TextSize;
  textAlign?: TextStyle["textAlign"];
}

export default function BText({ bold, color, size, textAlign, style, ...rest }: Props) {
  const fontSizing = (textSize: TextSize) => {
    switch (textSize) {
      case "small":
        return 12;
      case "medium":
        return 16;
      case "large":
        return 20;
    }
  };
  return (
    <Text
      selectable={false}
      style={[
        styles.defaults,
        color && { color },
        size && { fontSize: fontSizing(size) },
        bold && { fontWeight: "bold" },
        textAlign && { textAlign },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  defaults: {
    color: "white",
    fontSize: 12,
  },
});
