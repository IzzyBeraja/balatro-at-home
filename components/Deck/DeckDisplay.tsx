import DeckOfCards from "@/components/Deck/Deck";
import DeckCounter from "@/components/Deck/DeckCounter";
import DeckDescription from "@/components/Deck/DeckDescription";
import { Colors } from "@/constants/Colors";
import { DeckID, decks } from "@/constants/Decks";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  deckID: DeckID;
  stakeIndex: number;
  style?: StyleProp<ViewStyle>;
};

export default function DeckDisplay({ deckID, stakeIndex, style }: Props) {
  const { name, description, image, unlocked, stakeCompleted } = decks[deckID];
  return (
    <View style={[styles.container, style]}>
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
