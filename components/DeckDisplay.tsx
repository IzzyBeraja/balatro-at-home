import Deck from "@/components/Deck";
import DeckCounter from "@/components/DeckCounter";
import DeckDescription from "@/components/DeckDescription";
import { Colors } from "@/constants/Colors";
import { DeckType } from "@/constants/Decks";
import { Stake } from "@/constants/Stakes";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  deck: DeckType;
  stakeIndex: number;
  stakes: Stake[];
  style?: StyleProp<ViewStyle>;
};

export default function DeckDisplay({ deck, stakeIndex, stakes, style }: Props) {
  const { name, description, image, unlocked, stakeCompleted } = deck;
  return (
    <View style={[styles.container, style]}>
      <Deck deckImage={unlocked ? image : "locked"} />
      <DeckDescription name={name} description={description} />
      <DeckCounter selected={stakeIndex} numCompleted={stakeCompleted} stakes={stakes} />
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
