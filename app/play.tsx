import type { ScoreboardDetails } from "@/components/Scoreboard/Scoreboard";
import type { TDeckID} from "@/constants/Decks";
import type { TStakeID} from "@/constants/Stakes";

import Scoreboard from "@/components/Scoreboard/Scoreboard";
import { Colors } from "@/constants/Colors";
import { decks } from "@/constants/Decks";
import { stakes } from "@/constants/Stakes";
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

  const handType = "Royal Flush";
  const [score, setScore] = useState<ScoreboardDetails>({
    ante: 1,
    chips: 0,
    discards: deck.discards,
    hands: deck.hands,
    money: deck.startingMoney,
    mult: 0,
    round: 0,
    roundScore: 0,
  });

  const { width, height } = Dimensions.get("window");

  return (
    <View style={[{ height, marginLeft: -insets.left, width }, styles.screen]}>
      <Scoreboard
        handType={handType}
        stage="blind"
        stakeId={stake.id}
        score={score}
        style={{ flex: 1, width: 240 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  screen: {
    backgroundColor: Colors.green2,
    paddingHorizontal: 80,
  },
});
