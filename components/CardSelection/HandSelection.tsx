import type { TCard } from "@/constants/Cards";
import type { ViewProps } from "react-native";

import BButton from "@/components/ui/BButton";
import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  isSelecting: boolean;
  hand: TCard[];
  cardsLeft: number;
  totalCards: number;
  maxHand: number;
}

export default function HandSelection({
  isSelecting,
  maxHand,
  hand,
  cardsLeft,
  totalCards,
  style,
  ...rest
}: Props) {
  return (
    <View style={[styles.mainContainer, style]} {...rest}>
      <View style={styles.outerHandContainer}>
        {isSelecting ? (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 8,
              justifyContent: "center",
            }}
          >
            <BButton onPress={() => {}}>Discard</BButton>
            <BButton style={{ backgroundColor: Colors.blue }} onPress={() => {}}>
              Play Hand
            </BButton>
          </View>
        ) : (
          <>
            <View style={[styles.innerContainer, styles.innerHandContainer]} />
            <BText style={{ textAlign: "center" }}>{`${hand.length}/${maxHand}`}</BText>
          </>
        )}
      </View>

      <View style={styles.outerDeckContainer}>
        <View style={[styles.innerContainer, styles.innerDeckContainer]} />
        <BText style={{ textAlign: "right" }}>{`${cardsLeft}/${totalCards}`}</BText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
  },
  innerDeckContainer: {
    flex: 1,
  },
  innerHandContainer: {
    flex: 1,
  },
  mainContainer: {
    flexDirection: "row",
    gap: 8,
  },
  outerDeckContainer: {
    flex: 1,
  },
  outerHandContainer: {
    flex: 4,
  },
});
