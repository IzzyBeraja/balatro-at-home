import type { TConsumable } from "@/constants/Consumables";
import type { TJoker } from "@/constants/Jokers";
import type { TPlayingCard } from "@/constants/PlayingCards";
import type { TextStyle, ViewProps } from "react-native";

import BCard from "@/components/ui/BCard";
import BText from "@/components/ui/BText";

import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

const totalScoringCards = 5;

interface Props extends ViewProps {
  cards: TPlayingCard[] | TJoker[] | TConsumable[];
  maxValue: number;
  textAlign?: TextStyle["textAlign"];
  containerStyle?: ViewProps["style"];
  onChange: () => void;
}

export default function BCardContainer({
  cards,
  maxValue,
  containerStyle,
  textAlign = "auto",
  style,
  children,
  ...rest
}: Props) {
  const selectedCards = useRef(new Set()).current;
  const [totalSelected, setTotalSelected] = useState(0);

  const handleCardSelect = (id: string) => {
    const cardInSet = selectedCards.has(id);

    if (!cardInSet && totalSelected >= totalScoringCards) return;

    if (cardInSet) {
      selectedCards.delete(id);
      setTotalSelected(totalSelected - 1);
    } else {
      selectedCards.add(id);
      setTotalSelected(totalSelected + 1);
    }
  };

  return (
    <View style={style} {...rest}>
      <View style={[styles.innerContainer, containerStyle]}>
        {cards.map((card) => (
          <BCard
            key={card.id}
            card={card}
            isSelected={selectedCards.has(card.id)}
            onClick={() => handleCardSelect(card.id)}
          />
        ))}
      </View>
      <BText size="xsmall" style={{ textAlign }}>{`${cards.length}/${maxValue}`}</BText>
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
    justifyContent: "space-between",
  },
  mainContainer: {
    flexDirection: "row",
    gap: 24,
  },
});
