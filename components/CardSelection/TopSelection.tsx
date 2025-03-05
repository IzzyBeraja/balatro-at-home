import type { TConsumable } from "@/constants/Consumables";
import type { TJoker } from "@/constants/Jokers";
import type { ViewProps } from "react-native";

import BCardContainer from "@/components/ui/BCardContainer";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  jokers: TJoker[];
  consumables: TConsumable[];
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
      <BCardContainer
        cards={jokers}
        maxValue={maxJokers}
        style={styles.jokerContainer}
        onChange={() => {}}
      />
      <BCardContainer
        cards={consumables}
        maxValue={maxConsumables}
        style={styles.consumableContainer}
        textAlign="right"
        onChange={() => {}}
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
