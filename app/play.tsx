import type { ScoreboardDetails } from "@/components/Scoreboard/Scoreboard";
import type { TDeckID } from "@/constants/Decks";
import type { TStakeID } from "@/constants/Stakes";

import HandSelection from "@/components/CardSelection/HandSelection";
import TopSelection from "@/components/CardSelection/TopSelection";
import Scoreboard from "@/components/Scoreboard/Scoreboard";
import { Colors } from "@/constants/Colors";
import { decks } from "@/constants/Decks";
import { stakes } from "@/constants/Stakes";
import { shuffleDeck } from "@/game/deck";
import { genSeed } from "@/game/random";
import { useRandom } from "@/hooks/useRandom";

import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function PlayScreen() {
  const {
    seed: seedParam = genSeed(),
    stake: stakeParam = "white",
    deck: deckParam = "red",
  } = useLocalSearchParams<"/play", { seed?: string; stake?: TStakeID; deck?: TDeckID }>();
  const router = useRouter();
  const random = useRandom(seedParam);
  const stake = stakes[stakeParam];
  const deck = decks[deckParam];
  const [cardDeck, setCardDeck] = useState(shuffleDeck(random, deck.cards));

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

  const handleDiscard = () => {
    setCardDeck(shuffleDeck(random, cardDeck));
  };

  const handlePlayHand = () => {
    router.back();
  };

  return (
    <View style={styles.screen}>
      <Scoreboard
        handType={handType}
        score={score}
        stage="blind"
        stakeId={stake.id}
        style={{ width: 180 }}
        onMainMenu={() => router.back()}
      />
      <View style={styles.playArea}>
        <TopSelection
          consumables={["steel"]}
          jokers={["first"]}
          maxConsumables={2}
          maxJokers={5}
          style={{ height: 100 }}
        />
        <HandSelection
          cardsLeft={34}
          hand={cardDeck.slice(0, 7)}
          isSelecting
          maxHand={8}
          style={{ flex: 1 }}
          totalCards={52}
          onDiscard={handleDiscard}
          onPlayHand={handlePlayHand}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  playArea: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 12,
  },
  screen: {
    backgroundColor: Colors.green2,
    flex: 1,
    flexDirection: "row",
    gap: 20,
    paddingLeft: 80,
    paddingRight: 120,
  },
});
