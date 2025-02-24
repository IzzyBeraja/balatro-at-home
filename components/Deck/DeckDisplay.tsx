import type { TDeckID } from "@/constants/Decks";
import type { ViewProps } from "react-native";

import DeckCounter from "@/components/Deck/DeckCounter";
import DeckDescription from "@/components/Deck/DeckDescription";
import BDeck from "@/components/ui/BDeck";
import { Colors } from "@/constants/Colors";
import { decks } from "@/constants/Decks";

import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  deckId: TDeckID;
  stakeIndex: number;
}

export default function DeckDisplay({ deckId, stakeIndex, style, ...rest }: Props) {
  const { name, description, unlocked, stakeCompleted } = decks[deckId];
  return (
    <View style={[styles.container, style]} {...rest}>
      <BDeck deckId={deckId} />
      <DeckDescription description={description} name={name} />
      <DeckCounter numCompleted={stakeCompleted} selected={stakeIndex} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.defaultShadowColor,
    borderRadius: 6,
    columnGap: 6,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 6,
  },
});
