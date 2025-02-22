import type BCard from "@/components/ui/BCard";
import type { ReactElement } from "react";
import type { TextStyle, ViewProps } from "react-native";

import BText from "@/components/ui/BText";

import { StyleSheet, View } from "react-native";

type BCardElement = ReactElement<React.ComponentType<typeof BCard>, typeof BCard>;

interface Props extends ViewProps {
  value: number;
  maxValue: number;
  textAlign?: TextStyle["textAlign"];
  children: BCardElement | BCardElement[];
}

export default function BCardContainer({
  value,
  maxValue,
  textAlign = "auto",
  style,
  children,
  ...rest
}: Props) {
  return (
    <View style={style} {...rest}>
      <View style={styles.innerContainer}>{children}</View>
      <BText size="xsmall" style={{ textAlign }}>{`${value}/${maxValue}`}</BText>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mainContainer: {
    flexDirection: "row",
    gap: 24,
  },
});
