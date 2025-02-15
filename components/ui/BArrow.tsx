import { Colors } from "@/constants/Colors";
import { StyleSheet, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  visible: boolean;
}

export default function BArrow({ visible, style, ...rest }: Props) {
  return (
    <View
      style={[styles.arrow, visible && { borderTopColor: Colors.defaultButtonBackground }, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  arrow: {
    borderStartWidth: 6,
    borderStartColor: "transparent",
    borderTopWidth: 10,
    borderTopColor: "transparent",
    borderEndWidth: 6,
    borderEndColor: "transparent",
  },
});
