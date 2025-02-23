import type { TCard } from "@/constants/Cards";
import type { ViewProps } from "react-native";

import BButton from "@/components/ui/BButton";
import BCard from "@/components/ui/BCard";
import BCardContainer from "@/components/ui/BCardContainer";
import BText from "@/components/ui/BText";
import { Colors } from "@/constants/Colors";

import { useState } from "react";
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

/**
 *
 * Question that's on my mind. I'm wondering something about animations.
 * I'm thinking about how I might animate a card being played. I know that
 * I can make the cards all absolutely positioned and do some fancy math to
 * figure out where they should go and how fast they should get there, but
 * I wanna do something clever that I'm not sure will entirely work.
 *
 * See, the thing about React, is that it uses keys to determine element uniqueness.
 * If I have an element that create and give it a key, that makes it unique. React
 * has some interesting behaviors with key'd elements. I'm wondering if I can "move"
 * an element between divs by removing it from one div and adding it to another but
 * using the same key. I think that React might figure that the element is simply in
 * a weird place and animate it to the new location using the animate api. By
 * doing this, we should be able to avoid having to absolutely position cards to
 * fan out or be spaced in the screen. I'll try that out and see if it works.
 *
 */

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
  const [selected, setSelected] = useState(false);
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
              isSelected={selected}
              onClick={() => console.log("clicked")}
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
