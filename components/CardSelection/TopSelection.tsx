import type { ViewProps } from "react-native";

import BCardContainer from "@/components/ui/BCardContainer";

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
      <BCardContainer maxValue={maxJokers} style={styles.jokerContainer} value={jokers.length} />
      <BCardContainer
        maxValue={maxConsumables}
        style={styles.consumableContainer}
        textAlign="right"
        value={consumables.length}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  consumableContainer: {
    flex: 5,
  },
  jokerContainer: {
    flex: 11,
  },
  mainContainer: {
    flexDirection: "row",
    gap: 24,
  },
});
