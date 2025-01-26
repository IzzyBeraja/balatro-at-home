import Deck from "@/components/Deck";
import DeckCounter from "@/components/DeckCounter";
import DeckDescription from "@/components/DeckDescription";
import { Colors } from "@/constants/Colors";
import { Stake } from "@/constants/Stakes";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  name: string;
  image: string;
  description: React.ReactNode;
  unlocked: boolean;
  stakeIndex: number;
  numStakeUnlocked: number;
  stakes: Stake[];
  style?: StyleProp<ViewStyle>;
};

export default function DeckDisplay({
  name,
  image,
  description,
  unlocked,
  stakeIndex,
  numStakeUnlocked,
  stakes,
  style,
}: Props) {
  const deckImage = unlocked ? image : "locked";
  return (
    <View style={[styles.container, style]}>
      <Deck deckImage={deckImage} />
      <DeckDescription name={name} description={description} />
      <DeckCounter index={stakeIndex} numUnlocked={numStakeUnlocked} stakes={stakes} />
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
