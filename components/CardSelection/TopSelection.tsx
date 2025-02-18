import type { ViewProps } from "react-native";

import BText from "@/components/ui/BText";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  jokers: string[];
  consumables: string[];
  maxJokers: number;
  maxConsumables: number;
}

export default function TopSelection({
  consumables,
  maxConsumables,
  jokers,
  maxJokers,
  style,
  ...rest
}: Props) {
  return (
    <View style={[styles.mainContainer, style]} {...rest}>
      <View style={styles.outerJokerContainer}>
        <View style={[styles.innerContainer, styles.innerJokerContainer]} />
        <BText>{`${jokers.length}/${maxJokers}`}</BText>
      </View>
      <View style={styles.outerConsumableContainer}>
        <View style={[styles.innerContainer, styles.innerConsumableContainer]} />
        <BText style={{ textAlign: "right" }}>{`${consumables.length}/${maxConsumables}`}</BText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerConsumableContainer: {
    flex: 1,
  },
  innerContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
  },
  innerJokerContainer: {
    flex: 1,
  },
  mainContainer: {
    flexDirection: "row",
    gap: 8,
  },
  outerConsumableContainer: {
    flex: 1,
  },
  outerJokerContainer: {
    flex: 2,
  },
});
