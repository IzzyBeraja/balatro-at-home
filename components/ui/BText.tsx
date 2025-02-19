import type { TColors } from "@/constants/Colors";
import type { TextProps, TextStyle } from "react-native";

import { StyleSheet, Text } from "react-native";

type TextSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

interface Props extends TextProps {
  color?: TColors;
  bold?: true;
  size?: TextSize;
  textAlign?: TextStyle["textAlign"];
}

export default function BText({ bold, color, size, textAlign, style, ...rest }: Props) {
  const fontSizing = (textSize: TextSize) => {
    switch (textSize) {
      case "xsmall":
        return 10;
      case "small":
        return 12;
      case "medium":
        return 16;
      case "large":
        return 20;
      case "xlarge":
        return 24;
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
    letterSpacing: -1,
  },
});
