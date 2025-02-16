import DeckOfCards from "@/components/Deck/Deck";
import DeckCounter from "@/components/Deck/DeckCounter";
import DeckDescription from "@/components/Deck/DeckDescription";
import { Colors } from "@/constants/Colors";
import { TDeckID, decks } from "@/constants/Decks";
import { StyleSheet, View, ViewProps } from "react-native";

interface Props extends ViewProps {
  deckID: TDeckID;
  stakeIndex: number;
}

export default function DeckDisplay({ deckID, stakeIndex, style, ...rest }: Props) {
  const { name, description, image, unlocked, stakeCompleted } = decks[deckID];
  return (
    <View style={[styles.container, style]} {...rest}>
      <DeckOfCards deckImage={unlocked ? image : "locked"} />
      <DeckDescription name={name} description={description} />
      <DeckCounter selected={stakeIndex} numCompleted={stakeCompleted} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 6,
    backgroundColor: Colors.defaultShadowColor,
    padding: 6,
    borderRadius: 6,
  },
});
