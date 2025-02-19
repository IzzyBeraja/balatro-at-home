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
  onDiscard: () => void;
  onPlayHand: () => void;
}

export default function HandSelection({
  isSelecting,
  maxHand,
  hand,
  cardsLeft,
  totalCards,
  style,
  onDiscard,
  onPlayHand,
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
            <BButton onPress={onDiscard}>Discard</BButton>
            <BButton style={{ backgroundColor: Colors.blue }} onPress={onPlayHand}>
              Play Hand
            </BButton>
          </View>
        ) : (
          <>
            <View style={[styles.innerContainer, styles.innerHandContainer]} />
            <BText textAlign="center">{`${hand.length}/${maxHand}`}</BText>
          </>
        )}
      </View>

      <View style={styles.outerDeckContainer}>
        <View style={[styles.innerContainer, styles.innerDeckContainer]} />
        <BText size="xsmall" textAlign="right">{`${cardsLeft}/${totalCards}`}</BText>
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
    marginBottom: 20,
    marginRight: 10,
    width: 70,
  },
  outerHandContainer: {
    flex: 4,
  },
});
