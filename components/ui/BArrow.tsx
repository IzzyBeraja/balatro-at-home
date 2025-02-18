import type { ViewProps } from "react-native";

import { Colors } from "@/constants/Colors";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  visible: boolean;
}

export default function BArrow({ visible, style, ...rest }: Props) {
  return (
    <View style={[styles.arrow, visible && { borderTopColor: Colors.red }, style]} {...rest} />
  );
}

const styles = StyleSheet.create({
  arrow: {
    borderEndColor: "transparent",
    borderEndWidth: 6,
    borderStartColor: "transparent",
    borderStartWidth: 6,
    borderTopColor: "transparent",
    borderTopWidth: 10,
  },
});
