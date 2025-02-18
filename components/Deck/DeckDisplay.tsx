import type { TDeckID} from "@/constants/Decks";
import type { ViewProps } from "react-native";

import DeckOfCards from "@/components/Deck/Deck";
import DeckCounter from "@/components/Deck/DeckCounter";
import DeckDescription from "@/components/Deck/DeckDescription";
import { Colors } from "@/constants/Colors";
import { decks } from "@/constants/Decks";


import { StyleSheet, View } from "react-native";

interface Props extends ViewProps {
  deckID: TDeckID;
  stakeIndex: number;
}

export default function DeckDisplay({ deckID, stakeIndex, style, ...rest }: Props) {
  const { name, description, image, unlocked, stakeCompleted } = decks[deckID];
  return (
    <View style={[styles.container, style]} {...rest}>
      <DeckOfCards deckImage={unlocked ? image : "locked"} />
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
