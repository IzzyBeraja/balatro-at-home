import type { TCard } from "@/constants/Cards";
import type { ViewProps } from "react-native";

import BButton from "@/components/ui/BButton";
import BCard from "@/components/ui/BCard";
import BCardContainer from "@/components/ui/BCardContainer";
import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

const totalScoringCards = 5;

interface Props extends ViewProps {
  isSelecting: boolean;
  hand: TCard[];
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
  const selectedCards = useRef(new Set()).current;
  const [totalSelected, setTotalSelected] = useState(0);

  const handleCardSelect = (index: number) => {
    const cardInSet = selectedCards.has(index);

    if (!cardInSet && totalSelected >= totalScoringCards) {
      return;
    }

    if (cardInSet) {
      selectedCards.delete(index);
      setTotalSelected(totalSelected - 1);
    } else {
      selectedCards.add(index);
      setTotalSelected(totalSelected + 1);
    }
  };

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
          maxValue={maxHand}
          style={styles.cardContainer}
          textAlign="center"
          value={hand.length}
        >
          {hand.map((card, index) => (
            <BCard
              key={index}
              card={card}
              isSelected={selectedCards.has(index)}
              onClick={() => handleCardSelect(index)}
            />
          ))}
        </BCardContainer>
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
        maxValue={totalCards}
        style={styles.deckContainer}
        textAlign="right"
        value={cardsLeft}
      >
        <View />
      </BCardContainer>
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
