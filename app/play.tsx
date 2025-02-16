import Scoreboard, { ScoreboardDetails } from "@/components/Scoreboard/Scoreboard";
import { Colors } from "@/constants/Colors";
import { TDeckID, decks } from "@/constants/Decks";
import { TStakeID, stakes } from "@/constants/Stakes";
import { shuffleDeck } from "@/game/deck";
import { genSeed } from "@/game/random";
import { useRandom } from "@/hooks/useRandom";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PlayScreen() {
  const insets = useSafeAreaInsets();
  const {
    seed: seedParam = genSeed(),
    stake: stakeParam = "white",
    deck: deckParam = "red",
  } = useLocalSearchParams<"/play", { seed?: string; stake?: TStakeID; deck?: TDeckID }>();
  const router = useRouter();
  const random = useRandom(seedParam);
  const stake = stakes[stakeParam];
  const deck = decks[deckParam];
  const shuffledDeck = shuffleDeck(random, deck.cards);

  const [score, setScore] = useState<ScoreboardDetails>({
    chips: 0,
    mult: 0,
    hands: deck.hands,
    discards: deck.discards,
    money: deck.startingMoney,
    ante: 1,
    round: 0,
    roundScore: 0,
  });

  const { width, height } = Dimensions.get("window");

  return (
    <View style={[{ width, height, marginLeft: -insets.left }, styles.screen]}>
      <Scoreboard stage="blind" stake={stake} score={score} style={{ width: 180, flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.playBackground,
    paddingHorizontal: 80,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
