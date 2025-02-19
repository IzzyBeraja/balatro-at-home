import type { TextProps, TextStyle } from "react-native";

import { Colors, type TColors } from "@/constants/Colors";

import { StyleSheet, Text } from "react-native";

type TextSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

interface Props extends TextProps {
  color?: TColors;
  bold?: boolean;
  size?: TextSize;
  textAlign?: TextStyle["textAlign"];
}

export default function BText({
  bold = false,
  color = Colors.white,
  size = "small",
  textAlign = "auto",
  style,
  ...rest
}: Props) {
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
        { color, fontSize: fontSizing(size), textAlign },
        bold && { fontWeight: "bold" },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  defaults: {
    letterSpacing: -1,
  },
});
