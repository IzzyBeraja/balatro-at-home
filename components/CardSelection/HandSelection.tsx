import type { TPlayingCard } from "@/constants/PlayingCards";
import type { ViewProps } from "react-native";

import BButton from "@/components/ui/BButton";
import BCardContainer from "@/components/ui/BCardContainer";
import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  isSelecting: boolean;
  hand: TPlayingCard[];
  cardsLeft: number;
  totalCards: number;
  /** Total cards that are in the players hand */
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
      <View style={styles.handContainer}>
        <View
          style={{
            alignItems: "center",
            backgroundColor: Colors.green,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <BText>Hand</BText>
        </View>
        <BCardContainer
          cards={hand}
          containerStyle={{ paddingRight: 70 }}
          maxValue={maxHand}
          style={styles.cardContainer}
          textAlign="center"
          onChange={() => {}}
        />
        {isSelecting && (
          <View style={styles.actionBar}>
            <BButton style={{ padding: 16 }} onPress={onDiscard}>
              Discard
            </BButton>
            <BButton color={Colors.blue} style={{ padding: 16 }} onPress={onPlayHand}>
              Play Hand
            </BButton>
          </View>
        )}
      </View>
      <BCardContainer
        cards={[]}
        maxValue={totalCards}
        style={styles.deckContainer}
        textAlign="right"
        onChange={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  actionBar: {
    alignItems: "flex-end",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
  cardContainer: {
    height: 100,
  },
  deckContainer: {
    height: 100,
    marginBottom: 20,
    marginRight: 10,
    width: 70,
  },
  handContainer: {
    flex: 1,
    gap: 8,
    marginBottom: 20,
  },
  mainContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    gap: 8,
  },
});
