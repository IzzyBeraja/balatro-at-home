import type { TextStyle, ViewProps } from "react-native";

import BText from "@/components/ui/BText";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  value: number;
  maxValue: number;
  textAlign?: TextStyle["textAlign"];
}

export default function BCardContainer({
  value,
  maxValue,
  textAlign = "auto",
  style,
  ...rest
}: Props) {
  return (
    <View style={style} {...rest}>
      <View style={styles.innerContainer} />
      <BText size="xsmall" style={{ textAlign }}>{`${value}/${maxValue}`}</BText>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    flex: 1,
  },
  mainContainer: {
    flexDirection: "row",
    gap: 24,
  },
});
